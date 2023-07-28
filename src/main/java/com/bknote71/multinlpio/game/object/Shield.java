package com.bknote71.multinlpio.game.object;

import com.bknote71.multinlpio.protocol.info.SkillInfo;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class Shield {

    private long removeTime;

    public Shield() { }

    long nextUpdateTick = 0;

    public boolean update() {
        if (System.currentTimeMillis() > removeTime) {
            return false;
        }
        return true;
    }

    public void setRemoveTime(SkillInfo skill) {
        this.removeTime = System.currentTimeMillis() + skill.getDuration();
    }

}