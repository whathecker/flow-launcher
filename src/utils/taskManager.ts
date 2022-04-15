/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Task, TaskStatus } from "../types/core/entity";

const filterUnprioritized = (tasks: Task[]): Task[] => {
  return tasks.filter((task) => {
    return task.status === "open" && task.priority!.tier === "n/a";
  });
};

const checkTasksReadinessForPriorReview = (tasksInput: Task[]): boolean => {
  let result = true;

  for (let i = 0; i < tasksInput.length; i++) {
    if (
      tasksInput[i].status !== "open" ||
      tasksInput[i].priority!.urgency === "n/a" ||
      tasksInput[i].priority!.importance === "n/a"
    ) {
      result = false;
      break;
    }
  }

  return result;
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
    const importance = task.priority!.importance;
    const urgency = task.priority!.urgency;

    if (importance === "yes" && urgency === "yes") {
      highest.push(task);
    }

    if (importance === "yes" && urgency === "no") {
      high.push(task);
    }

    if (importance === "no" && urgency === "yes") {
      mid.push(task);
    }

    if (importance === "no" && urgency === "no") {
      low.push(task);
    }
  });

  return {
    highest,
    high,
    mid,
    low,
  };
};

//TODO: write the test for this
const sortByIndexAndStatus = (tasks: Task[]): Task[] => {
  return tasks
    .sort((a, b) => {
      return a.priority!.index - b.priority!.index;
    })
    .sort((a, b) => {
      const sortScoreA = _assignSortScoreByStatus(a.status);
      const sortScoreB = _assignSortScoreByStatus(b.status);
      return sortScoreA - sortScoreB;
    });
};

function _assignSortScoreByStatus(input: TaskStatus): number {
  let result = 0;
  if (input === "finished") {
    result = 1;
  }
  return result;
}

export default {
  filterUnprioritized,
  checkTasksReadinessForPriorReview,
  filterByPriorityScheme,
  sortByIndexAndStatus,
};
