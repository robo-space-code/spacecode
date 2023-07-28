package com.bknote71.multinlpio.game.room;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.PriorityQueue;


class RoomManagerTest {

    private PriorityQueue<GameRoom> pq = new PriorityQueue<>(RoomManagerTest::compare);

    private static int compare(GameRoom o1, GameRoom o2) {
        return o1.getSize() - o2.getSize(); // o1.size > o2.getsize
    }

    @Test
    void pq_empty_poll() {
        Assertions.assertThat(pq.poll()).isNull();
    }

    @Test
    void pq_test() {
        // pq 한 번 테스트
        GameRoom room1 = new GameRoom(1);
        GameRoom room2 = new GameRoom(2);
        GameRoom room3 = new GameRoom(3);
        // 1
        room1.sizeIncrement();
        room1.sizeIncrement();
        // 2
        room2.sizeIncrement();
        room2.sizeIncrement();
        room2.sizeIncrement();
        // 3
        room3.sizeIncrement();

        pq.offer(room1);
        pq.offer(room2);
        pq.offer(room3);

        GameRoom room = pq.poll();
        Assertions.assertThat(room.getRoomId()).isEqualTo(3);
    }

    @Test
    void room_poll_first() {
        GameRoom room1 = RoomManager.Instance.poll();
        Assertions.assertThat(room1).isNotNull();
        Assertions.assertThat(room1.getRoomId()).isEqualTo(1);
        Assertions.assertThat(room1.getSize()).isEqualTo(1);
    }

//    @Test
//    void room_poll_10() {
//        for (int i = 0; i < 10; ++i) {
//            RoomManager.Instance.poll();
//        }
//        // roomId check
//        Assertions.assertThat(RoomManager.Instance.getCount()).isEqualTo(1);
//
//        RoomManager.Instance.poll();
//        Assertions.assertThat(RoomManager.Instance.getCount()).isEqualTo(2);
//    }
//
//    @Test
//    void room_poll_500() {
//        for (int i = 0; i < 489; ++i) {
//            RoomManager.Instance.poll();
//        }
//        Assertions.assertThat(RoomManager.Instance.getCount()).isEqualTo(49);
//
//        for (int i = 0; i < 100; ++i) {
//            RoomManager.Instance.poll();
//        }
//        Assertions.assertThat(RoomManager.Instance.getCount()).isEqualTo(50);
//        Assertions.assertThat(RoomManager.Instance.poll().getSize()).isEqualTo(12);
//
//    }


}