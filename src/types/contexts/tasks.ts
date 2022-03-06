import {
  Goal,
  GoalColor,
  Task,
  IFetchTasksInput,
  IUpdateTasksPrioInput,
} from "../core/entity";

export type TasksState = {
  goal: Goal | null;
  goalColor: GoalColor | null;
  tasks: Task[];
  errorMsg?: string;
};

export type ContextProvierProps = {
  state: TasksState;
  fetchTasks: (input: IFetchTasksInput) => Promise<void>;
  updateTasksPrio: (input: IUpdateTasksPrioInput) => Promise<void>;
};

export enum TasksActionType {
  fetchTasks = "FETCH_TASKS",
  updateTasksPrio = "UPDATE_TASKS_PRIO",
  error = "ERROR",
}

export type TasksAction = {
  type: TasksActionType;
  payload?: TasksState;
};
