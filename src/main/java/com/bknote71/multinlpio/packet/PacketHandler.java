package com.bknote71.multinlpio.packet;

import com.bknote71.multinlpio.data.DataManager;
import com.bknote71.multinlpio.game.object.ObjectManager;
import com.bknote71.multinlpio.game.room.GameRoom;
import com.bknote71.multinlpio.game.object.Player;
import com.bknote71.multinlpio.game.room.RoomManager;
import com.bknote71.multinlpio.protocol.info.CreatureState;
import com.bknote71.multinlpio.protocol.info.ObjectInfo;
import com.bknote71.multinlpio.protocol.info.PositionInfo;
import com.bknote71.multinlpio.protocol.info.StatInfo;
import com.bknote71.multinlpio.session.ClientSession;
import com.bknote71.multinlpio.protocol.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.socket.WebSocketSession;

@Slf4j
public class PacketHandler {

    public static void CEnterGameHandler(ClientSession clientSession, Protocol protocol) {
        log.info("client enter game");
        CEnterGame enterPacket = (CEnterGame) protocol;

        // 플레이어 생성, 위치는 랜덤으로 생성
        Player player = ObjectManager.Instance.add(Player.class);
        ObjectInfo info = player.getInfo();
        PositionInfo posInfo = info.getPosInfo();

        info.setName(enterPacket.getUsername());
        // posInfo.setPos(Vector2d.createRandom(0, 2000));
        posInfo.setState(CreatureState.IDLE);

        // stat
        StatInfo stat = DataManager.statInfoMap.get(0);
        info.setStatInfo(stat); // 나중에 stat 도 지정해야함

        player.setSession(clientSession);
        clientSession.setMyPlayer(player);

        // 방 찾기
        Integer roomId = getRoomId(clientSession.getWebSocketSession());
        GameRoom gameRoom = RoomManager.Instance.find(roomId);
        gameRoom.push(gameRoom::enterGame, player);
    }

    public static void CChatHandler(ClientSession clientSession, Protocol protocol) {
        CChat chatPacket = (CChat) protocol;
        // validation << 나중에 함수로 묶짜.
        Player player = clientSession.getMyPlayer();
        if (player == null) {
            log.info("player is null");
            return;
        }

        GameRoom room = player.getGameRoom();
        if (room == null) {
            log.info("room is null");
            return;
        }

        log.info("chat content: {}", chatPacket.getContent());

        room.push(room::handleChat, player, chatPacket);
    }

    public static void CMoveHandler(ClientSession clientSession, Protocol protocol) {
        CMove movePacket = (CMove) protocol;

        // SMove 패킷 전송
        Player player = clientSession.getMyPlayer();
        if (player == null) {
            return;
        }

        GameRoom room = player.getGameRoom();
        if (room == null) {
            return;
        }

        room.push(room::handleMove, player, movePacket);
    }

    public static void CSkillHandler(ClientSession clientSession, Protocol protocol) {
        log.info("c skill handle {}", clientSession.getMyPlayer().getPlayerId());
        CSkill skillPacket = (CSkill) protocol;

        Player player = clientSession.getMyPlayer();
        if (player == null)
            return;

        GameRoom room = player.getGameRoom();
        if (room == null)
            return;

        if (skillPacket.getTarget() == 0) {
            log.info("none target");
            return;
        }

        room.push(room::handleSkill, player, skillPacket);
    }

    private static Integer getRoomId(WebSocketSession session) {
        String[] paths = session.getUri().getPath().split("/");
        // path: /room/{roomId}
        Integer roomId = Integer.valueOf(paths[2]);
        return roomId;
    }
}
