package com.bknote71.multinlpio.session;

import com.bknote71.multinlpio.game.room.GameRoom;
import com.bknote71.multinlpio.game.object.Player;
import com.bknote71.multinlpio.packet.ServerPacketManager;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Slf4j
public class ClientSessionHandler extends TextWebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // session 이 지정한 방에 플레이어 추가!!
        log.info("connected established");

        // 클라이언트 세션 생성 및 추가
        ClientSessionManager.Instance.generate(session);
        // ServerPacketManager.Instance.handlePacket(clientSession, new TextMessage("connect"));
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // ClientSession 이게 굳이 필요한가?
        // 일단 ClientSession == WebSocketSession wrapper
        ClientSession clientSession = ClientSessionManager.Instance.find(session.getId());
        ServerPacketManager.Instance.handlePacket(clientSession, message);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        super.handleTransportError(session, exception);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        log.info("connection closed status {} and closed={}", status, !session.isOpen());
        // leave room
        ClientSession clientSession = ClientSessionManager.Instance.find(session.getId());
        Player player = clientSession.getMyPlayer();
        if (player == null)
            return;

        GameRoom gameRoom = player.getGameRoom();
        if (gameRoom == null)
            return;

        gameRoom.push(gameRoom::leaveGame, player.getPlayerId());
        ClientSessionManager.Instance.remove(clientSession);

        // 만약에 룸에 사람이 없다면 해당 룸은 잠깐 쉬어야 합니다.
        // gameRoom.push(gameRoom::release);
    }

}
