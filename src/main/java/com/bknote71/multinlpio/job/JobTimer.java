package com.bknote71.multinlpio.job;

import java.util.PriorityQueue;

public class JobTimer {

    private PriorityQueue<JobTimerElem> pq = new PriorityQueue<>();
    private Object lock = new Object();

    public void push(IJob job, int tickAfter) {
        JobTimerElem jobTimerElem = new JobTimerElem();
        jobTimerElem.execTick = System.currentTimeMillis() + tickAfter;
        jobTimerElem.job = job;

        synchronized (lock) {
            pq.offer(jobTimerElem);
        }
    }

    public void flush() {
        while (true) {
            // 실행해야 하는 시간이 현재 틱보다 작으면 실행
            long now = System.currentTimeMillis();
            JobTimerElem jobTimerElem;
            synchronized (lock) {
                if (pq.isEmpty())
                    break;

                jobTimerElem = pq.peek();
                if (jobTimerElem.execTick > now)
                    break;

                pq.poll();
            }
            jobTimerElem.job.execute();
        }
    }

    static class JobTimerElem implements Comparable<JobTimerElem> {
        long execTick;
        IJob job;

        @Override
        public int compareTo(JobTimerElem o) {
            return (int) (o.execTick - execTick);
        }
    }
}
