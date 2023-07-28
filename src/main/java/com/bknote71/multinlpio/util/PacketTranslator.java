package com.bknote71.multinlpio.util;

import com.bknote71.multinlpio.protocol.Protocol;
import com.bknote71.multinlpio.protocol.ProtocolType;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class PacketTranslator {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    static {
        MAPPER.setVisibility(
                MAPPER.getSerializationConfig().getDefaultVisibilityChecker()
                        .withFieldVisibility(JsonAutoDetect.Visibility.ANY)
        );
        MAPPER.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
    }

    public static String json(Protocol packet) {
        String json = null;
        try {
            json = MAPPER.writeValueAsString(packet);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return json;
    }

    public static <T extends Protocol> T object(String json) {
        try {
            return MAPPER.readValue(json, new TypeReference<T>() {});
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }


    public static ProtocolType protocol(String json) {
        try {
            JsonNode jsonNode = MAPPER.readTree(json);
            JsonNode protocol = jsonNode.get("protocol");
            if (protocol == null)
                return null;
            return Enum.valueOf(ProtocolType.class, protocol.asText());
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
