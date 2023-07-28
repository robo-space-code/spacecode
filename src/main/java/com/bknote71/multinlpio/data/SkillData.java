package com.bknote71.multinlpio.data;

import com.bknote71.multinlpio.protocol.info.SkillInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@JsonTypeName("skilldata")
@Getter
public class SkillData implements ILoader<Integer, SkillInfo> {

    private List<SkillInfo> skills;

    @Override
    public Map<Integer, SkillInfo> makeMap() {
        Map<Integer, SkillInfo> result = new HashMap<>();
        for (SkillInfo skill : skills)
            result.put(skill.getSkillId(), skill);
        return result;
    }
}
