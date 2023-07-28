package com.bknote71.multinlpio.protocol.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StatInfo {
    // hp, maxHp, speed, attack (무조건 죽는걸로 할까?)
    int hp;
    int maxHp;
    float speed;
}
