package com.bknote71.multinlpio.util;

import com.bknote71.multinlpio.protocol.info.PositionInfo;
import com.bknote71.multinlpio.game.Vector2d;
import com.bknote71.multinlpio.protocol.CChat;
import com.bknote71.multinlpio.protocol.CMove;
import com.bknote71.multinlpio.protocol.Protocol;
import org.junit.jupiter.api.Test;

class PacketTranslatorTest {

    @Test
    void cchat_translate() {
        CChat cChat = new CChat("C_Chat", "hi");

        String json = PacketTranslator.json(cChat);
        System.out.println(json);

        Protocol p = PacketTranslator.object(json);
        System.out.println(p.protocol());
        CChat p1 = (CChat) p;
        System.out.println(p1.getContent());
    }

    @Test
    void cmove_translate() {
        CMove cMove = new CMove();
        PositionInfo posInfo = new PositionInfo();
        posInfo.setPos(new Vector2d(1, 1));
        cMove.setPosInfo(posInfo);

        String json = PacketTranslator.json(cMove);
        System.out.println(json);

        Protocol p = PacketTranslator.object(json);
        System.out.println(p.protocol());
        CMove p1 = (CMove) p;
        System.out.println(p1.getPosInfo());
    }

    @Test
    void dest_test() {
        System.out.println(Math.pow(2, 3));
    }
}