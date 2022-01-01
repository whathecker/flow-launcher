import { Goal, IAddGoalInput } from "../entity";

export type GoalsState = {
  goals?: Goal[];
  newGoal?: Goal;
  errorMsg?: string;
};

export type ContextProviderProps = {
  state: GoalsState;
  fetchGoals: () => Promise<void>;
  addGoal: (input: IAddGoalInput) => Promise<void>;
};

export enum GoalsActionType {
  fetch = "FETCH_GOALS",
  add = "ADD_GOAL",
  error = "ERROR",
}

export type GoalsAction = {
  type: GoalsActionType;
  payload?: GoalsState;
};
