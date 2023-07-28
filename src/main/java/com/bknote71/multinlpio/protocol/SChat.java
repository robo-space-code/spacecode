package com.bknote71.multinlpio.protocol;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("schat")
@Data
public class SChat extends Protocol {

    private int playerId; // sender
    private String content;

    public SChat() {
        super(ProtocolType.S_Chat);
    }

}
