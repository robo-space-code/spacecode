package com.bknote71.multinlpio.protocol.info;

import com.bknote71.multinlpio.game.Vector2d;

public enum MoveDir {

    North(0, 1),
    South(0, -1),
    West(-1, 0),
    East(1, 0),
    Northeast(Vector2d.l, Vector2d.l),
    Northwest(-Vector2d.l, Vector2d.l),
    Southwest(-Vector2d.l, -Vector2d.l),
    Southeast(Vector2d.l, -Vector2d.l);

    public final double x, y;

    MoveDir(double x, double y) {
        this.x = x;
        this.y = y;
    }
}
