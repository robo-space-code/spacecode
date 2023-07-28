package com.bknote71.multinlpio.protocol.info;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SkillInfoTest {


    @Test
    void json() throws JsonProcessingException {
        SkillInfo info = new SkillInfo(1, "a", 1, null, null, null);
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writeValueAsString(info);
        System.out.println(s);

        SkillInfo readValue = objectMapper.readValue(s, SkillInfo.class);
        System.out.println(readValue);
    }

}