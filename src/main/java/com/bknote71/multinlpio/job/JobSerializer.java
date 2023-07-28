package com.bknote71.multinlpio.job;

import com.bknote71.multinlpio.packet.TriConsumer;

import java.util.LinkedList;
import java.util.Queue;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

public class JobSerializer { // 잡 큐

    private Queue<IJob> jobQueue = new LinkedList<>();
    private Object lock = new Object();

    // "예약 job"
    private JobTimer timer = new JobTimer();

    // 최초 flush 체크 여부
    // boolean _flush = false;

    public void pushAfter(int tickAfter, Runnable action) { pushAfter(tickAfter, new Job(action));}
    public <T1> void pushAfter(int tickAfter, Consumer<T1> action, T1 t1) { pushAfter(tickAfter, new UniJob(action, t1));}
    public <T1, T2> void pushAfter(int tickAfter, BiConsumer<T1, T2> action, T1 t1, T2 t2) { pushAfter(tickAfter, new BiJob(action, t1, t2));}
    public <T1, T2, T3> void pushAfter(int tickAfter, TriConsumer<T1, T2, T3> action, T1 t1, T2 t2, T3 t3) { pushAfter(tickAfter, new TriJob(action, t1, t2, t3));}

    public void pushAfter(int tickAfter, IJob job) {
        timer.push(job, tickAfter);
    }

    // push 헬퍼 메서드
    public void push(Runnable action) { push(new Job(action));}
    public <T1> void push(Consumer<T1> action, T1 t1) { push(new UniJob(action, t1));}
    public <T1, T2> void push(BiConsumer<T1, T2> action, T1 t1, T2 t2) { push(new BiJob(action, t1, t2));}
    public <T1, T2, T3> void push(TriConsumer<T1, T2, T3> action, T1 t1, T2 t2, T3 t3) { push(new TriJob(action, t1, t2, t3));}

    // 잡 큐에 푸쉬
    private void push(IJob job) {
        synchronized (lock) {
            jobQueue.offer(job);
        }
    }

    // 큐에 있는 잡 모두 실행
    public void flush() {
        while (true) {
            IJob job = pop();
            if (job == null)
                return;
            job.execute();
        }
    }

    private IJob pop() {
        synchronized (lock) {
            if (jobQueue.isEmpty()) {
                // _flush = false;
                return null;
            }
            return jobQueue.poll();
        }
    }
}
