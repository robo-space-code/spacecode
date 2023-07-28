package com.bknote71.multinlpio.protocol.info;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SkillInfo {
    private int skillId;
    private String name;
    private int damage;
    private SkillType skillType;

    // 총알 용
    private ProjectileInfo projectile;

    // 쉴드 용
    // private Double range;
    private Long duration; // ms 단위
}
