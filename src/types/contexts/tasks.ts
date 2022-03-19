import {
  Goal,
  GoalColor,
  Task,
  IFetchTasksInput,
  IUpdateTasksPrioInput,
  IUpdatePrioTasksIndexInput,
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
  updatePrioTasksIndex: (input: IUpdatePrioTasksIndexInput) => Promise<void>;
};

export enum TasksActionType {
  fetchTasks = "FETCH_TASKS",
  updateTasksPrio = "UPDATE_TASKS_PRIO",
  updatePrioTasksIndex = "UPDATE_PRIO_TASKS_INDEX",
  error = "ERROR",
}

export type TasksAction = {
  type: TasksActionType;
  payload?: TasksState;
};
