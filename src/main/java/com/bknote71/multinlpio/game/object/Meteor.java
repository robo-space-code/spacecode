package com.bknote71.multinlpio.game.object;

import com.bknote71.multinlpio.game.room.GameRoom;
import com.bknote71.multinlpio.protocol.info.GameObjectType;
import com.bknote71.multinlpio.game.Vector2d;
import lombok.Getter;

import java.util.List;


public class Meteor extends GameObject {

    // meteor 전용 스텟
    // 메테오 전용 방향 단위 벡터. 따라서 moveDir 가 필요 없다.
    private Vector2d dirvec;
    // private double speed = 20;
    private double speed = 2;
    private double range = 50;
    private int damage = 1000;

    @Getter
    private String word;

    // 태어나고 1초 뒤에 false 됨 <<
    @Getter
    private boolean invisible;
    private long createdAt;

    public Meteor() {
        setType(GameObjectType.Meteor);
        invisible = true;
        createdAt = System.currentTimeMillis();
    }

    public Meteor(Vector2d vector2d) {
        this();
        this.dirvec = vector2d.unit(); // 단위 벡터여야 함
    }

    // 상태: 움직임
    public void update() {
        // 메테오 사라지는 주기
        if (System.currentTimeMillis() > createdAt + 20000) {
            GameRoom room = getGameRoom();
            if (room == null)
                return;
            room.push(room::leaveGame, getId());
            return;
        }

        // invisible 세팅
        if (System.currentTimeMillis() > createdAt + 1000)
            invisible = false;
        updateMoving(); // 무조건 움직이도록 한다.
    }

    public void setDirvec(Vector2d vec) {
        this.dirvec = vec.unit(); // 단위 벡터여야 함
    }

    public void setWord(String word) {
        this.word = word;
    }

    // 틱: 움직임 업데이트 기간 단위
    long nextMoveTick;
    private void updateMoving() {
        if (nextMoveTick > System.currentTimeMillis())
            return;

        int tick = (int) (1000 / 30);
        nextMoveTick = System.currentTimeMillis() + tick;

        // 무조건 dirvec 방향으로 움직임: 히트 or 이동(소멸) 둘 중 하나이다!
        // 히트 판정: 현재 메테오의 위치에 있는 플레이어들이 있는지 확인
        // 있으면 히트 (우선 플레이어만, 나중에는 bullet 도)
        GameRoom room = getGameRoom();
        if (room == null)
            return;

        List<Player> players = room.findPlayer(p -> Vector2d.isIncludedInRange(pos(), range, p.pos()));
        if (!players.isEmpty()) {
            handleHit(players);
            return;
        }

        // 이동할 위치
        int mapSize = room.getGameMap().sizeX();
        Vector2d dest = Vector2d.dest(pos(), dirvec, speed);
        dest.x = (dest.x + mapSize) % mapSize;
        dest.y = (dest.y + mapSize) % mapSize;

        // 만약 맵 끝에 도달한다면 소멸해야한다. (맵의 끝 삭제 <<)
//        if (!room.cango(dest)) {
////            System.out.println("맵의 끝에 도달했으므로 소멸");
//            room.push(room::leaveGame, getId());
//            return;
//        }
        pos(dest);
    }

    private void handleHit(List<Player> players) {
        // System.out.println("hit " + players.size() + " " + players.get(0).getId());
        // TODO: 유효한 타겟인지 확인

        // TODO: 얼마만큼의 데미지를 줄 지에 대한 데이터 뽑기

        // 데미지 판정
        for (Player player : players)
            player.onDamaged(this, damage);
    }
}
