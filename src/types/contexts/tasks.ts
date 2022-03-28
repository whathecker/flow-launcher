import {
  Goal,
  GoalColor,
  Task,
  IFetchTasksInput,
  IUpdateTasksPrioInput,
  IUpdatePrioTasksIndexInput,
  IUpdateTaskStatusInput,
} from "../core/entity";

export type TasksState = {
  goal: Goal | null;
  goalColor: GoalColor | null;
  tasks: Task[];
  unprioTasks: Task[];
  highestPrioTasks: Task[];
  highPrioTasks: Task[];
  midPrioTasks: Task[];
  lowPrioTasks: Task[];
  errorMsg?: string;
};

export type ContextProvierProps = {
  state: TasksState;
  fetchTasks: (input: IFetchTasksInput) => Promise<void>;
  updateTasksPrio: (input: IUpdateTasksPrioInput) => Promise<void>;
  updatePrioTasksIndex: (input: IUpdatePrioTasksIndexInput) => Promise<void>;
  updateTaskStatus: (input: IUpdateTaskStatusInput) => Promise<void>;
};

export enum TasksReducerType {
  fetchTasks = "FETCH_TASKS",
  error = "ERROR",
}

export type TasksAction = {
  type: TasksReducerType;
  payload?: TasksState;
};
