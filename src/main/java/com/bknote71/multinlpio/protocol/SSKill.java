package com.bknote71.multinlpio.protocol;

import com.bknote71.multinlpio.protocol.info.SkillInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

@JsonTypeName("sskill")
@Data
public class SSKill extends Protocol{ // bullet or barrier
    private int objectId;
    private SkillInfo info;

    public SSKill() {
        super(ProtocolType.S_Skill);
        info = new SkillInfo();
    }
}
