/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Task } from "../types/core/entity";

//TODO: write test for this module

const filterUnprioritized = (tasks: Task[]): Task[] => {
  return tasks.filter((task) => {
    return task.status === "open" && task.priority!.tier === "n/a";
  });
};

type TasksInPriorityBucket = {
  highest: Task[];
  high: Task[];
  mid: Task[];
  low: Task[];
};

const filterByPriorityScheme = (tasks: Task[]): TasksInPriorityBucket => {
  const highest: Task[] = [];
  const high: Task[] = [];
  const mid: Task[] = [];
  const low: Task[] = [];

  // TODO: consider to make checking if the status is opened as a flag
  tasks.forEach((task) => {
    if (task.status === "open") {
      const importance = task.priority!.importance;
      const urgency = task.priority!.urgency;

      if (importance === "yes" && urgency === "yes") {
        task.priority!.tier = "highest";
        highest.push(task);
      }

      if (importance === "yes" && urgency === "no") {
        task.priority!.tier = "high";
        high.push(task);
      }

      if (importance === "no" && urgency === "yes") {
        task.priority!.tier = "mid";
        mid.push(task);
      }

      if (importance === "no" && urgency === "no") {
        task.priority!.tier = "low";
        low.push(task);
      }
    }
  });

  return {
    highest,
    high,
    mid,
    low,
  };
};

export default { filterUnprioritized, filterByPriorityScheme };
