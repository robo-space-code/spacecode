package com.bknote71.multinlpio;

import com.bknote71.multinlpio.data.DataManager;
import com.bknote71.multinlpio.game.room.GameRoom;
import com.bknote71.multinlpio.game.room.LeaderBoardTemplate;
import com.bknote71.multinlpio.game.room.RoomManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MultiNlpIoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MultiNlpIoApplication.class, args);

		DataManager.loadData();

		// 무조건 처음 룸 생성하도록 할까?
		GameRoom room = RoomManager.Instance.poll();
		room.register();

		LeaderBoardTemplate.getLeaderBoard(-1);
	}
}
