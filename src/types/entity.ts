import { Priority } from "./value-object";

export type ID = number | string;

export type GoalStatus = "open" | "finished";
export type Reminder = "daily" | "three_days" | "seven_days";

export class Goal {
  constructor(
    public _id: ID,
    public status: GoalStatus,
    public title: string,
    public motivation: string,
    public reminder: Reminder,
    public tasks: Task[] | [],
  ) {}
}

export type TaskStatus = "open" | "finished";

export class Task {
  constructor(
    public _id: ID,
    public goal_id: ID,
    public title: string,
    public description: string,
    public status: TaskStatus,
    public priority?: Priority,
  ) {}
}