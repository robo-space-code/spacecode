package com.bknote71.multinlpio.game.object;

import com.bknote71.multinlpio.game.Vector2d;
import com.bknote71.multinlpio.protocol.info.GameObjectType;
import com.bknote71.multinlpio.game.room.GameRoom;
import com.bknote71.multinlpio.protocol.SMove;
import com.bknote71.multinlpio.protocol.info.SkillInfo;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter @Setter
public class Bullet extends GameObject {

    private GameObject owner;
    private GameObject target; // bullet 은 target 을 따라간다. 따라서 moveDir 가 필요 없다.

    private SkillInfo skill;
    private double speed;
    private double range;
    private double direction;

    private int[] dx = {0, 1, 0, -1, 0};
    private int[] dy = {0, 0, 1, 0, -1};
    public Bullet() {
        setType(GameObjectType.Bullet);
    }

    // 다음 움직일 틱 기간, 이 틱을 기준으로 update
    // 참고로 자바에서는 "1틱"이 거의 1ms라고 한다.
    long nextMoveTick = 0;

    public void update() {
        GameRoom room = getGameRoom();
        int objectId = getId();
        if (room == null || room.getGameMap() == null)
            return;

        if (owner == null || target == null) {
            room.push(room::leaveGame, objectId);
            return;
        }

        // 이후에 실행해야 할 조건
        if (nextMoveTick > System.currentTimeMillis())
            return;

        // next move tick 갱신
        long tick = (long) (1000 / 30); // tick(대기 시간) = 1초(도달 거리)/(속도s?)
        nextMoveTick = System.currentTimeMillis() + tick;

        // 다음 위치로 갈 수 있으면 이동한다.
        int mapSize = 2000;
        Vector2d targetPos = target.pos();
        // 거리가 짧은 곳으로 dir 를 설정해야 한다.

        Vector2d dir = new Vector2d(10000, 10000);
        for (int i = 0; i < 5; ++i) {
            double nx = targetPos.x + dx[i] * mapSize;
            double ny = targetPos.y + dy[i] * mapSize;
            Vector2d cand = new Vector2d(nx - pos().x, ny - pos().y);
            if (cand.mag() < dir.mag())
                dir = cand;
        }

        direction = Math.atan2(dir.y, dir.x);
        Vector2d dest = Vector2d.dest(pos(), dir.unit(), speed);
        dest.x = (dest.x + mapSize) % mapSize;
        dest.y = (dest.y + mapSize) % mapSize;
      
        // log
         log.info("target type: {}, target pos ({}, {})", target.getType(), targetPos.x, targetPos.y);
         log.info("방향 단위 벡터: ({}, {})", dir.x, dir.y);
         log.info("bullet 이동 위치 ({}, {})", dest.x, dest.y);

        // 갈 수 있는 조건: dest, range 안에 target 플레이어가 없어야 한다. + 맵 밖이 아니여야 한다.
        if (!Vector2d.isIncludedInRange(dest, range, targetPos)) {
            // 좌표 갱신 이후 이동 패킷 보내기(SMove)
            pos(dest.x, dest.y);
            SMove movePacket = new SMove();
            movePacket.setObjectId(objectId);
            movePacket.setPosInfo(getPosInfo());
            room.broadcast(movePacket);
        } else {
            target.onDamaged(this, skill.getDamage());
            room.push(room::leaveGame, objectId);
        }
    }

    public void setSkill(SkillInfo skill) {
        this.skill = skill;
        this.range = skill.getProjectile().getRange();
        this.speed = skill.getProjectile().getSpeed();
    }
}
