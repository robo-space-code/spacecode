package com.bknote71.multinlpio.protocol;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = CEnterGame.class, name = "centergame"),
        @JsonSubTypes.Type(value = CChat.class, name = "cchat"),
        @JsonSubTypes.Type(value = CMove.class, name = "cmove"),
        @JsonSubTypes.Type(value = CSkill.class, name = "cskill")
})
public abstract class Protocol {

    private ProtocolType protocol;

    public Protocol() {
    }

    public Protocol(ProtocolType protocol) {
        this.protocol = protocol;
    }

    public Protocol(String protocol) {
        this.protocol = Enum.valueOf(ProtocolType.class, protocol);
    }

    public short protocol() {
        return (short) protocol.ordinal();
    }

    public void setProtocol(ProtocolType protocol) {
        this.protocol = protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = Enum.valueOf(ProtocolType.class, protocol);
    }
}
