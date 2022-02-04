import { scheduleJob } from "node-schedule";
import { nanoid } from 'nanoid'


declare global {
  var jobs: any;
}

global.jobs = {};

export class Jobs {
  constructor(name: string | null = null) {
    //@ts-ignore
    this.name = name;
  }

  register(date: any = null, fn: any,): any {
    if (!date) {
      throw new Error('no date provided');
    }

    const key = nanoid();
    const job = scheduleJob(date, fn);
    //@ts-ignore
    job.key = key;
    //@ts-ignore
    global.jobs[key] = { job, date, name: this.name };

    return job;
  }

  remove(key: string): void {
    global.jobs[key].job.cancel();
    delete global.jobs[key];
  }

  size(): number {
    return Object.keys(global.jobs).length;
  }

  get(key: string): any {
    return global.jobs[key] || null;
  }

  all(): any {
    return global.jobs;
  }
}
