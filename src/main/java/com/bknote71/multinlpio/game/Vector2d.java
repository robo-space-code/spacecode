package com.bknote71.multinlpio.game;

import com.bknote71.multinlpio.protocol.info.MoveDir;
import lombok.Data;

import java.util.concurrent.ThreadLocalRandom;

@Data
public class Vector2d {
    public static final double l = 1 / Math.sqrt(2);

    public double x;
    public double y;

    public Vector2d() {
    }

    public Vector2d(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public static Vector2d createRandom(double origin, double bound) {
        double mx = ThreadLocalRandom.current().nextDouble(origin, bound);
        double my = ThreadLocalRandom.current().nextDouble(origin, bound);
        return new Vector2d(mx, my);
    }

    public static Vector2d north() {
        return new Vector2d(0, 1);
    }
    public static Vector2d south() {
        return new Vector2d(0, -1);
    }
    public static Vector2d west() {
        return new Vector2d(-1, 0);
    }
    public static Vector2d east() {
        return new Vector2d(1, 0);
    }
    public static Vector2d northeast() {
        return new Vector2d(l, l);
    }
    public static Vector2d northwest() {
        return new Vector2d(-l, l);
    }
    public static Vector2d southwest() {
        return new Vector2d(-l, -l);
    }
    public static Vector2d southeast() {
        return new Vector2d(l, -l);
    }

    public static Vector2d dest(Vector2d cur, MoveDir dir, double k) {
        return new Vector2d(cur.x + dir.x * k, cur.y + dir.y * k);
    }

    public static Vector2d dest(Vector2d cur, Vector2d unitvec, double k) { // 현재 포지션에서 vec 단위벡터로 k 크기만큼 이동
        return new Vector2d(cur.x + unitvec.x * k, cur.y + unitvec.y * k);
    }

    public double dist() {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    public double mag() {
        return Math.pow(x, 2) + Math.pow(y, 2);
    }

    public static Vector2d unitVector(Vector2d dest, Vector2d src) { //src to dest
        Vector2d d = new Vector2d(dest.x - src.x, dest.y - src.y);
        return new Vector2d(d.x / d.dist(), d.y / d.dist());
    }

    public Vector2d unit() {
        return new Vector2d(x / dist(), y / dist());
    }

    public static boolean isIncludedInRange(Vector2d center, double range, Vector2d pos) { // bullet range
        return Math.pow(center.x - pos.x, 2) + Math.pow(center.y - pos.y, 2) <= Math.pow(range, 2);
    }
}
