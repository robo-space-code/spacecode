package com.bknote71.multinlpio.protocol;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("sleavegame")
@Data
public class SLeaveGame extends Protocol { // 어떤 플레이어가 게임을 나갔다.

    private int playerId;

    public SLeaveGame() {
        super(ProtocolType.S_LeaveGame);
    }

}
