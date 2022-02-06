import React, { useReducer } from "react";
import tasksReducer from "./tasks-reducer";
import { fetchTasks } from "./tasks-actions";
import { TasksState, ContextProvierProps } from "../../types/contexts/tasks";

const defaultState: TasksState = {
  goal: null,
  tasks: [],
};

const defaultCtxProviderProps: ContextProvierProps = {
  state: defaultState,
  fetchTasks: () => Promise.resolve(),
};

export const TasksContext = React.createContext(defaultCtxProviderProps);

export const TasksContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, defaultState);

  const boundActions = {
    fetchTasks: fetchTasks(dispatch),
  };

  return (
    <TasksContext.Provider value={{ state, ...boundActions }}>
      {children}
    </TasksContext.Provider>
  );
};
