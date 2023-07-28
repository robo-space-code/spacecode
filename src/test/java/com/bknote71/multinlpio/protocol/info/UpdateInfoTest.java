package com.bknote71.multinlpio.protocol.info;

import com.bknote71.multinlpio.protocol.SEnterGame;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

class UpdateInfoTest {

    @Test
    void updateinfo_json() throws JsonProcessingException {
        UpdateInfo updateInfo = new UpdateInfo();




        UpdateInfo.UpdatePos me = new UpdateInfo.UpdatePos();

        List<UpdateInfo.UpdatePos> os = new ArrayList<>();
        for (int i = 0; i < 3; ++i) {
            UpdateInfo.UpdatePos tm = new UpdateInfo.UpdatePos();
            os.add(tm);
        }

//        updateInfo.me = me;
//        updateInfo.others = os;

        ObjectMapper mapper = new ObjectMapper();
//        mapper.enableDefaultTyping();
        mapper.setVisibility(
                mapper.getSerializationConfig().getDefaultVisibilityChecker()
                        .withFieldVisibility(JsonAutoDetect.Visibility.ANY)
        );
        String json = mapper.writeValueAsString(updateInfo);
        System.out.println(json);
        SEnterGame sEnterGame = new SEnterGame();
//        sEnterGame.setUpdate(updateInfo);
        String json2 = mapper.writeValueAsString(sEnterGame);
        System.out.println(json2);
    }

}