package com.bknote71.multinlpio.protocol;

import com.bknote71.multinlpio.protocol.info.PositionInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("smove")
@Data
public class SMove extends Protocol {

    private int objectId;
    private PositionInfo posInfo;

    public SMove() {
        super(ProtocolType.S_Move);
    }
}
