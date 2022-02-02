import { Priority } from "./value-object";

export type ID = number | string;

export type GoalStatus = "open" | "finished";
export type Reminder = "daily" | "three_days" | "seven_days";

export class Goal {
  constructor(
    public status: GoalStatus,
    public title: string,
    public motivation: string,
    public reminder: Reminder,
    public tasks: Task[],
    public _id?: ID,
  ) {}
}

export interface IAddGoalInput {
  title: string;
  motivation: string;
  reminder: string;
}

export interface IAddTaskInput {
  title: string;
  description: string;
  goal_id: string;
}

export interface IFetchTasksInput {
  goal_id: string;
}

export type TaskStatus = "open" | "finished";

export class Task {
  constructor(
    public _id: ID,
    public goal_id: ID,
    public title: string,
    public status: TaskStatus,
    public description?: string,
    public priority?: Priority,
  ) {}
}
