package com.bknote71.multinlpio.job;

import java.util.function.BiConsumer;

public class BiJob<T1, T2> implements IJob {

    private BiConsumer<T1, T2> action;
    private T1 t1;
    private T2 t2;

    public BiJob(BiConsumer<T1, T2> action, T1 t1, T2 t2) {
        this.action = action;
        this.t1 = t1;
        this.t2 = t2;
    }

    @Override
    public void execute() {
        action.accept(t1, t2);
    }
}
