package com.bknote71.multinlpio.protocol;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("sdie")
@Data
public class SDie extends Protocol {

    private int objectId;
    private int attackerId;

    public SDie() {
        super(ProtocolType.S_Die);
    }
}
