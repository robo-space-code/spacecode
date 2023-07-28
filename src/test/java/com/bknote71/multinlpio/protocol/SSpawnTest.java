package com.bknote71.multinlpio.protocol;

import com.bknote71.multinlpio.protocol.info.ObjectInfo;
import com.bknote71.multinlpio.util.PacketTranslator;
import org.junit.jupiter.api.Test;

class SSpawnTest {

    @Test
    void spawn_json() {
        SSpawn spawnpacket = new SSpawn();
        ObjectInfo info = new ObjectInfo();
        info.setName("spawn object");
        info.setObjectId(123);
        spawnpacket.add(info);

        String json = PacketTranslator.json(spawnpacket);
        System.out.println(json);
    }

}