package com.bknote71.multinlpio.protocol;

import java.util.ArrayList;
import java.util.List;

public class SDespawn extends Protocol {

    private List<Integer> objectIds = new ArrayList<>();

    public SDespawn() {
        super(ProtocolType.S_Despawn);
    }

    public void add(int objectId) {
        objectIds.add(objectId);
    }
}
