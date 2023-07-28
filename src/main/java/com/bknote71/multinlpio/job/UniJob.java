package com.bknote71.multinlpio.job;

import java.util.function.Consumer;

public class UniJob<T1> implements IJob {

    private Consumer<T1> action;
    private T1 t1;

    public UniJob(Consumer<T1> action, T1 t1) {
        this.action = action;
        this.t1 = t1;
    }

    @Override
    public void execute() {
        action.accept(t1);
    }
}
