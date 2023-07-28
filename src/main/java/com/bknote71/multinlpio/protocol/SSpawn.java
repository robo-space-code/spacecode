package com.bknote71.multinlpio.protocol;

import com.bknote71.multinlpio.protocol.info.ObjectInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@JsonTypeName("sspawn")
@Data
public class SSpawn extends Protocol {

    // list of players
    private List<ObjectInfo> objects = new ArrayList<>();

    public SSpawn() {
        super(ProtocolType.S_Spawn);
    }

    public void add(ObjectInfo info) {
        objects.add(info);
    }
}
