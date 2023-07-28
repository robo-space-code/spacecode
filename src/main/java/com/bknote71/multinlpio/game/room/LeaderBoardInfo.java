package com.bknote71.multinlpio.game.room;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeaderBoardInfo {
    String username;
    int score;
}