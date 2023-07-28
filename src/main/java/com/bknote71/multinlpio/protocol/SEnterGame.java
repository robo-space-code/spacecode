package com.bknote71.multinlpio.protocol;

import com.bknote71.multinlpio.protocol.info.ObjectInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("sentergame")
@Data
public class SEnterGame extends Protocol { // 내(플레이어) 정보

    private ObjectInfo player;

    public SEnterGame() {
        super(ProtocolType.S_EnterGame);
        player = new ObjectInfo();
    }
}
