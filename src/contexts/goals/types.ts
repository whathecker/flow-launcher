import { Goal } from "../../types/entity";

export type GoalsState = {
  goals?: Goal[];
  errorMsg?: string;
};

export type ContextProviderProps = {
  state: GoalsState;
  fetchGoals: () => Promise<void>;
};

export enum GoalsActionType {
  fetch = "FETCH_GOALS",
  error = "ERROR",
}

export type GoalsAction = {
  type: GoalsActionType;
  payload?: GoalsState;
};
