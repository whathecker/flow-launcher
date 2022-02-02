import { Goal, Task, IAddGoalInput, IAddTaskInput } from "../core/entity";

export type GoalsState = {
  goals?: Goal[];
  newGoal?: Goal;
  newTask?: Task;
  errorMsg?: string;
};

export type ContextProviderProps = {
  state: GoalsState;
  fetchGoals: () => Promise<void>;
  addGoal: (input: IAddGoalInput) => Promise<void>;
  addTaskToGoal: (input: IAddTaskInput) => Promise<void>;
};

export enum GoalsActionType {
  fetchGoals = "FETCH_GOALS",
  addGoal = "ADD_GOAL",
  addTask = "ADD_TASK",
  error = "ERROR",
}

export type GoalsAction = {
  type: GoalsActionType;
  payload?: GoalsState;
};
