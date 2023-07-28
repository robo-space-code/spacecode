package com.bknote71.multinlpio.protocol;

import com.bknote71.multinlpio.protocol.info.CreatureState;
import com.bknote71.multinlpio.protocol.info.MoveDir;
import com.bknote71.multinlpio.protocol.info.PositionInfo;
import com.bknote71.multinlpio.util.PacketTranslator;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

class CUpdatePosTest {

    @Test
    void set_test() {
        CMove movePacket = new CMove();
        Set<MoveDir> dirs = new HashSet<>();
        PositionInfo posInfo = new PositionInfo();
        posInfo.setState(CreatureState.IDLE);
//        posInfo.setPos(new Vector2d(1,1));
        dirs.add(MoveDir.North);
        dirs.add(MoveDir.East);
        posInfo.setDirs(dirs);
        movePacket.setPosInfo(posInfo);

        String json = PacketTranslator.json(movePacket);
        System.out.println(json);

        CMove object = PacketTranslator.object(json);
        System.out.println(object.getPosInfo());

        Assertions.assertTrue(dirs.contains(MoveDir.North));
        Assertions.assertTrue(dirs.contains(MoveDir.East));
    }

}