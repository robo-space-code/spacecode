package com.bknote71.multinlpio.protocol.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
public class UpdateInfo {

    public long t;
    public List<UpdatePos> others;
    public List<BulletInfo> bullets;
    public List<MeteorInfo> meteors;
    public ArrayList<Object> leaderboard;

    public UpdateInfo() {
        t = System.currentTimeMillis();
        others = new ArrayList<>();
        bullets = new ArrayList<>();
        meteors = new ArrayList<>();
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpdatePos {
        String username;
        double direction;
        int hp;
        int id;
        double x;
        double y;
        int shields;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BulletInfo {
        int id;
        double x;
        double y;
        double direction;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MeteorInfo {
        int id;
        double x;
        double y;
        boolean invisible;
        String word;
    }

}
