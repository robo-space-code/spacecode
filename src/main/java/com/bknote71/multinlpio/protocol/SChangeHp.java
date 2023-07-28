package com.bknote71.multinlpio.protocol;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("schangehp")
@Data
public class SChangeHp extends Protocol {

    private int objectId;
    private int hp;

    public SChangeHp() {
        super(ProtocolType.S_ChangeHP);
    }
}
