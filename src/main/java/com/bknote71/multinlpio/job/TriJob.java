package com.bknote71.multinlpio.job;

import com.bknote71.multinlpio.packet.TriConsumer;

public class TriJob<T1, T2, T3> implements IJob {

    private TriConsumer<T1, T2, T3> action;
    private T1 t1;
    private T2 t2;
    private T3 t3;

    public TriJob(TriConsumer<T1, T2, T3> action, T1 t1, T2 t2, T3 t3) {
        this.action = action;
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
    }

    @Override
    public void execute() {
        action.accept(t1, t2, t3);
    }
}
