package com.bknote71.multinlpio.game.room;

import java.util.*;

public class RoomManager {
    public static RoomManager Instance = new RoomManager();

    private Object lock = new Object();
    private Map<Integer, GameRoom> rooms = new HashMap<>();
    private int count; // 룸의 개수

    // pq
    private PriorityQueue<GameRoom> pq = new PriorityQueue<>(RoomManager::compare);

    private static int compare(GameRoom o1, GameRoom o2) {
        return o1.getSize() - o2.getSize();
    }

    // 테스트용 get <<
    public int getCount() {
        return count;
    }

    private GameRoom add() {
        synchronized (lock) {
            GameRoom gameRoom = new GameRoom(++count);
            rooms.put(this.count, gameRoom);
            pq.offer(gameRoom);
            return gameRoom;
        }
    }

    public GameRoom find(Integer roomId) {
        synchronized (lock) {
            GameRoom gameRoom = null;
            if ((gameRoom = rooms.get(roomId)) == null)
                return null;
            return gameRoom;
        }
    }

    public GameRoom poll() {
        synchronized (lock) {
            GameRoom room = pq.peek(); // size 가 제일 작은 room 반환

            if (room == null)
                room = add();

            // 방은 50개로 제한 (임시로~)
            if (10 <= room.getSize() && count < 50)
                room = add();

            pq.poll();
            room.sizeIncrement();
            pq.offer(room);

            return room;
        }
    }

    public void remove(Integer roomId) {
        synchronized (lock) {
            rooms.remove(roomId);
        }
    }

    List<Timer> timers = new ArrayList<>();
    Object timerLock = new Object();

    public void registerTimerTask(Timer timer) {
        synchronized (timerLock) {
            timers.add(timer);
        }
    }

    public void removePlayerAtRoom(GameRoom room) {
        if (pq.remove(room))
            return;

        room.sizeDecrement();
        pq.offer(room);
    }
}
