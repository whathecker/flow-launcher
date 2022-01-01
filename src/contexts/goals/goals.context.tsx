import React, { useReducer } from "react";
import goalsReducer from "./goals-reducer";
import { fetchGoals, addGoal } from "./goals-actions";
import { GoalsState, ContextProviderProps } from "./types";

const defaultState: GoalsState = {
  goals: [],
};

const defaultCtxProviderProps: ContextProviderProps = {
  state: defaultState,
  fetchGoals: () => Promise.resolve(),
  addGoal: () => Promise.resolve(),
};

export const GoalsContext = React.createContext(defaultCtxProviderProps);

export const GoalsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(goalsReducer, defaultState);

  const boundActions = {
    fetchGoals: fetchGoals(dispatch),
    addGoal: addGoal(dispatch),
  };

  return (
    <GoalsContext.Provider value={{ state, ...boundActions }}>
      {children}
    </GoalsContext.Provider>
  );
};
