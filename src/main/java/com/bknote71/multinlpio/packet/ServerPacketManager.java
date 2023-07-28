package com.bknote71.multinlpio.packet;

import com.bknote71.multinlpio.session.ClientSession;
import com.bknote71.multinlpio.util.PacketTranslator;
import com.bknote71.multinlpio.protocol.*;
import org.springframework.web.socket.TextMessage;

import java.lang.reflect.Constructor;
import java.util.HashMap;
import java.util.Map;
import java.util.function.BiConsumer;

public class ServerPacketManager {

    public static ServerPacketManager Instance = new ServerPacketManager();

    public ServerPacketManager() {
        register();
    }

    private Map<ProtocolType, TriConsumer<ClientSession, TextMessage, ProtocolType>> onRecvs = new HashMap<>();
    private Map<ProtocolType, BiConsumer<ClientSession, Protocol>> handlers = new HashMap<>();

    public void register() {
        onRecvs.put(ProtocolType.C_EnterGame, (session, message, protocol) -> makePacket(session, message, protocol, CEnterGame.class));
        handlers.put(ProtocolType.C_EnterGame, PacketHandler::CEnterGameHandler);
        onRecvs.put(ProtocolType.C_Chat, (session, message, protocol) -> makePacket(session, message, protocol, CChat.class));
        handlers.put(ProtocolType.C_Chat, PacketHandler::CChatHandler);
        onRecvs.put(ProtocolType.C_Move, (session, message, protocol) -> makePacket(session, message, protocol, CMove.class));
        handlers.put(ProtocolType.C_Move, PacketHandler::CMoveHandler);
        onRecvs.put(ProtocolType.C_Skill, (session, message, protocol) -> makePacket(session, message, protocol, CSkill.class));
        handlers.put(ProtocolType.C_Skill, PacketHandler::CSkillHandler);
    }

    public void handlePacket(ClientSession session, TextMessage message) {
        // tri consumer 에서 makePacket 을 찾은 이후, 패킷을 만들고 핸들러를 실행하도록 한다.
        // json
        String json = message.getPayload();
        ProtocolType protocol = PacketTranslator.protocol(json);

        TriConsumer<ClientSession, TextMessage, ProtocolType> action;
        if (onRecvs.containsKey(protocol)) {
            action = onRecvs.get(protocol);
            action.accept(session, message, protocol);
        }
    }

    public <T extends Protocol> void makePacket(ClientSession session, TextMessage message, ProtocolType protocol, Class<T> clazz) {
        try {
            Constructor<T> constructor = clazz.getDeclaredConstructor();
            constructor.setAccessible(true);
            T pkt = PacketTranslator.object(message.getPayload());

            BiConsumer<ClientSession, Protocol> action;
            if (handlers.containsKey(protocol)) {
                action = handlers.get(protocol);
                action.accept(session, pkt);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
