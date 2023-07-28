package com.bknote71.multinlpio.protocol.info;

import com.bknote71.multinlpio.game.Vector2d;
import lombok.Data;

import java.util.Set;

@Data
public class PositionInfo {
    Vector2d pos;
    Set<MoveDir> dirs;
    CreatureState state;
}
