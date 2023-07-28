package com.bknote71.multinlpio.game.room;

import com.bknote71.multinlpio.data.DataManager;
import com.bknote71.multinlpio.game.object.*;
import com.bknote71.multinlpio.job.JobSerializer;
import com.bknote71.multinlpio.game.Vector2d;
import com.bknote71.multinlpio.protocol.info.*;
import com.bknote71.multinlpio.session.ClientSession;
import com.bknote71.multinlpio.protocol.*;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Slf4j
public class GameRoom extends JobSerializer {

    @Getter
    private int roomId;
    @Getter
    private int size; // room의 크기

    public void sizeIncrement() {
        ++size;
    }

    public void sizeDecrement() {
        --size;
    }

    // GameMap 필요가 있을까? 단순하게 크기만 나타내면 될텐데 ...
    @Getter
    private GameMap gameMap;

    private Map<Integer, Player> players = new HashMap<>();
    private Map<Integer, Bullet> bullets = new HashMap<>();
    private Map<Integer, Meteor> meteors = new HashMap<>();

    private TimerTask updateRoomTask;
    private TimerTask createMeteorTask;
    private TimerTask updateLeaderboardTask;

    public GameRoom(int id) {
        this.roomId = id;
        this.gameMap = new GameMap(0, 2000, 0, 2000);
        this.updateRoomTask = new TimerTask() {
            @Override
            public void run() {
                try {
                    update();
                } catch (RuntimeException e) {
                    log.error("error: {}", e);
                }
            }
        };
        this.createMeteorTask = new TimerTask() {
            @Override
            public void run() {
                for (int i = 0; i < 2; ++i)
                    createMeteor();
            }
        };
        this.updateLeaderboardTask = new TimerTask() {
            @Override
            public void run() {
                // call redis server
                // 동시성 문제
                List<Player> tplayers = new ArrayList<>(players.values());
                for (Player player : tplayers)
                    LeaderBoardTemplate.updateLeaderBoard(roomId, player.getInfo().getName(), player.getScore());
            }
        };
    }

    // register time task
    public void register() {
        // tick room
        Timer updateRoomTimer = new Timer();
        updateRoomTimer.schedule(updateRoomTask, 0, 1000 / 30); // delay, interval
        RoomManager.Instance.registerTimerTask(updateRoomTimer);

        Timer createMeteorTimer = new Timer();
        createMeteorTimer.schedule(createMeteorTask, 1000, 3000);
        RoomManager.Instance.registerTimerTask(createMeteorTimer);

        Timer updateLeaderBoardTimer = new Timer();
        updateLeaderBoardTimer.schedule(updateLeaderboardTask, 0, 3000);
        RoomManager.Instance.registerTimerTask(updateLeaderBoardTimer);
    }

    public void release() {
        log.info("room release");
        updateRoomTask.cancel();
        createMeteorTask.cancel();
    }

    public void update() {
        // update packet 보내기
        SUpdate updatePacket = new SUpdate();
        UpdateInfo update = new UpdateInfo();
        update.leaderboard = new ArrayList<>();
        update.t = System.currentTimeMillis();

        // meteor, bullet(projectile), shield update
        for (Bullet bullet : bullets.values()) {
            bullet.update();
            update.bullets.add(new UpdateInfo.BulletInfo(bullet.getId(), bullet.pos().x, bullet.pos().y, bullet.getDirection()));
        }

        for (Meteor meteor : meteors.values()) {
            meteor.update();
            update.meteors.add(
                    new UpdateInfo.MeteorInfo(meteor.getId(), meteor.pos().x, meteor.pos().y, meteor.isInvisible(), meteor.getWord()));
        }

        flush();

        for (Player player : players.values()) {
            player.update();
            update.others.add(
                    new UpdateInfo.UpdatePos(
                            player.getInfo().getName(),
                            player.getDirection(), player.hp(), player.getId(), player.pos().x, player.pos().y,
                            player.getShields().size()));
        }

        updatePacket.update = update;
        broadcast(updatePacket);
    }

    public void enterGame(GameObject gameObject) { // 플레이어의 위치는 랜덤으로 생성한다.
        if (gameObject == null)
            return;

        GameObjectType gameObjectType = gameObject.getType();

        if (gameObjectType == GameObjectType.Player) {
            Player player = (Player) gameObject;
            // log.info("player({}) enter game", player.getId());
            size++;
            players.put(player.getPlayerId(), player);
            player.init(gameMap.sizeX());
            player.setGameRoom(this);
            player.getInfo().getPosInfo().setPos(Vector2d.createRandom(0, gameMap.sizeX()));
            // 바로 업데이트
            LeaderBoardTemplate.updateLeaderBoard(roomId, player.getInfo().getName(), 0);

            // room 과 세션 이어주기
            ClientSession session = player.getSession();

            // gameMap.enter(player);

            // SEnterGame: "내가" 게임룸에 입장함을 알림
            SEnterGame enterPacket = new SEnterGame();
            enterPacket.setPlayer(player.getInfo());
            session.send(enterPacket);
        } else if (gameObjectType == GameObjectType.Bullet) {
            Bullet bullet = (Bullet) gameObject;
            bullets.put(bullet.getId(), bullet);
            bullet.setGameRoom(this);
            bullet.getTarget().addAttacker(bullet);
        } else if (gameObjectType == GameObjectType.Meteor) {
            Meteor meteor = (Meteor) gameObject;
            meteors.put(meteor.getId(), meteor);
            meteor.setGameRoom(this);
        }

        // 주변 플레이어들에게 내 스폰 정보를 넘김 (당연히 나 제외)
        /*
         * SSpawn resSpawnPacket = new SSpawn();
         * resSpawnPacket.add(gameObject.getInfo());
         * for (Player p : players.values()) {
         * if (p.getPlayerId() != gameObject.getId())
         * p.getSession().send(resSpawnPacket);
         * }
         */
    }

    public void leaveGame(int objectId) {
        // log.info("leave game ()-({})", ObjectManager.getObjectTypeById(objectId),
        // objectId);

        GameObjectType type = ObjectManager.getObjectTypeById(objectId);
        if (type == GameObjectType.Player) {
            Player player;
            if ((player = players.remove(objectId)) == null)
                return;
            // room 크기 줄이기
            RoomManager.Instance.removePlayerAtRoom(this);
            if (size == 0)
                release();

            // room null
            player.setGameRoom(null);

            // 본인한테 leavePacket 전송
            SLeaveGame leavePacket = new SLeaveGame();
            ClientSession session = player.getSession();
            if (session.getWebSocketSession().isOpen())
                session.send(leavePacket);

            player.flushAttackers();
        } else if (type == GameObjectType.Meteor) {
            Meteor meteor;
            if ((meteor = meteors.remove(objectId)) == null)
                return;

            meteor.setGameRoom(null);
            meteor.flushAttackers();
        } else if (type == GameObjectType.Bullet) {
            Bullet bullet; // 제거할 총알
            if ((bullet = bullets.remove(objectId)) == null)
                return;

            bullet.setGameRoom(null);
        }
        // 만약 플레이어나 메테오의 경우, 자신을 향해 날라오는 총알을 다 없애야 한다. (일단은 임시로)
    }

    public void handleChat(Player player, CChat chatPacket) {
        if (player == null)
            return;

        SChat resChatPacket = new SChat();
        resChatPacket.setPlayerId(player.getPlayerId()); // sender
        resChatPacket.setContent(chatPacket.getContent());
        broadcast(resChatPacket);

    }

    public void handleMove(Player player, CMove movePacket) {
        if (player == null) {
            return;
        }

        // dirs 와 updown 만 업데이트
        Boolean updown = movePacket.getUpdown();
        MoveDir dir = movePacket.getDir();

        if (updown)
            player.addDir(dir);
        else
            player.removeDir(dir);
    }

    public void handleSkill(Player player, CSkill skillPacket) {
        if (player == null)
            return;

        ObjectInfo info = player.getInfo();

        // TODO: 스킬 사용 가능 여부 확인 ^.^

        log.info("({}) can use skill {}", player.getInfo().getName(), skillPacket.getInfo().getName());

        // 스킬 사용 알림
        SSKill resSkillPacket = new SSKill();
        resSkillPacket.setObjectId(info.getObjectId()); // 스킬을 쓴 사람
        resSkillPacket.getInfo().setSkillId(skillPacket.getInfo().getSkillId());
        broadcast(resSkillPacket);

        // 새로운 스킬용 객체 생성 ex) bullet, ...
        SkillInfo skill = DataManager.skillInfoMap.get(skillPacket.getInfo().getSkillId());
        if (skill == null)
            return;

        SkillType skillType = skill.getSkillType();
        switch (skillType) {
            case BULLET -> {
                Bullet bullet = ObjectManager.Instance.add(Bullet.class);
                if (bullet == null)
                    return;

                GameObjectType targetType = ObjectManager.getObjectTypeById(skillPacket.getTarget());
                Map<Integer, ? extends GameObject> targetMap = targetType == GameObjectType.Player ? players : meteors;

                // init bullet, bullet 은 moveDir 가 필요 없음!
                PositionInfo bulletPosInfo = new PositionInfo();
                PositionInfo playerPosInfo = player.getPosInfo();
                bulletPosInfo.setState(playerPosInfo.getState());
                bulletPosInfo.setPos(playerPosInfo.getPos());
                bullet.setSkill(skill);
                bullet.setPosInfo(bulletPosInfo);
                bullet.setOwner(player);
                GameObject target = targetMap.get(skillPacket.getTarget());
                if (target == null) {
                    log.info("in handle skill, target is null, so bullet can't be created");
                    return;
                }
                bullet.setTarget(target);
                push(this::enterGame, bullet);
            }

            case SHIELD -> {
                Shield shield = new Shield();
                shield.setRemoveTime(skill);
                player.addShield(shield);
            }
        }
    }

    private void createMeteor() {
        Meteor meteor = ObjectManager.Instance.add(Meteor.class);
        if (meteor == null)
            return;

        String word = DataManager.words[ThreadLocalRandom.current().nextInt(0, DataManager.words.length)].getWord();
        // init bullet, bullet 은 moveDir 가 필요 없음!
        PositionInfo meteorPosInfo = new PositionInfo();
        meteorPosInfo.setPos(Vector2d.createRandom(0, gameMap.sizeX()));
        meteor.setDirvec(Vector2d.createRandom(-1, 1));
        meteor.setPosInfo(meteorPosInfo);
        meteor.setWord(word);
        push(this::enterGame, meteor);
    }

    public boolean cango(Vector2d pos) {
        return gameMap.cango(pos);
    }

    public List<Player> findPlayer(Predicate<Player> condition) {
        return players.values().stream()
                .filter(condition)
                .collect(Collectors.toList());
    }

    public void broadcast(Protocol packet) {
        for (Player p : players.values()) {
            p.getSession().send(packet);
        }
    }
}
