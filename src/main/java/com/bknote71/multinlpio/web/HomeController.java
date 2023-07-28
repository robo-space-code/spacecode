package com.bknote71.multinlpio.web;

import com.bknote71.multinlpio.game.room.GameRoom;
import com.bknote71.multinlpio.game.room.LeaderBoardInfo;
import com.bknote71.multinlpio.game.room.LeaderBoardTemplate;
import com.bknote71.multinlpio.game.room.RoomManager;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Slf4j
@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/enter/game")
    @ResponseBody
    public Integer room_number() {
        GameRoom room = RoomManager.Instance.poll();

        if (room == null)
            return null;

        // timer task 등록 (-> 주기마다 실행해야 하는 timer task 등록)
        if (room.getSize() == 1)
            room.register();

        return room.getRoomId();
    }

    @GetMapping("/get/leaderboard")
    @ResponseBody
    public List<LeaderBoardInfo> getLeaderBoard(int roomId) {
        return LeaderBoardTemplate.getLeaderBoard(roomId);
    }

    @GetMapping("/get/today_ranking")
    @ResponseBody
    public List<LeaderBoardInfo> getTodayRanking() {
        LeaderBoardTemplate.union();
        return LeaderBoardTemplate.getTodayRanking();
    }
}
