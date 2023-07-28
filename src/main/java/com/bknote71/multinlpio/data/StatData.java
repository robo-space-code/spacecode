package com.bknote71.multinlpio.data;

import com.bknote71.multinlpio.protocol.info.StatInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@JsonTypeName("statdata")
@Getter
public class StatData implements ILoader<Integer, StatInfo> {

    private List<StatInfo> stats;

    @Override
    public Map<Integer, StatInfo> makeMap() {
        int idx = 0;
        Map<Integer, StatInfo> result = new HashMap<>();
        for (StatInfo stat : stats)
            result.put(idx++, stat);
        return result;
    }
}
