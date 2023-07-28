package com.bknote71.multinlpio.protocol;

import com.bknote71.multinlpio.protocol.info.UpdateInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.AllArgsConstructor;

@JsonTypeName("supdate")
@AllArgsConstructor
public class SUpdate extends Protocol {

    public UpdateInfo update;

    public SUpdate() {
        super(ProtocolType.S_Update);
    }
}
