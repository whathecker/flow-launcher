import { Goal, Task, IFetchTasksInput } from "../core/entity";

export type TasksState = {
  goal: Goal | null;
  tasks: Task[];
  errorMsg?: string;
};

export type ContextProvierProps = {
  state: TasksState;
  fetchTasks: (input: IFetchTasksInput) => Promise<void>;
};

export enum TasksActionType {
  fetchTasks = "FETCH_TASKS",
  error = "ERROR",
}

export type TasksAction = {
  type: TasksActionType;
  payload?: TasksState;
};