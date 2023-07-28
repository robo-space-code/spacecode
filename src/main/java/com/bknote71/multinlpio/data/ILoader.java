package com.bknote71.multinlpio.data;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import java.util.Map;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes(value = {
        @JsonSubTypes.Type(value = StatData.class, name = "statdata"),
        @JsonSubTypes.Type(value = SkillData.class, name = "skilldata")
})
public interface ILoader<K, V> {
    Map<K, V> makeMap();
}
