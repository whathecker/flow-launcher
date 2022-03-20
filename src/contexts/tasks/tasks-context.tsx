import React, { useReducer } from "react";
import tasksReducer from "./tasks-reducer";
import {
  fetchTasks,
  updateTasksPrio,
  updatePrioTasksIndex,
} from "./tasks-actions";
import { TasksState, ContextProvierProps } from "../../types/contexts/tasks";

const defaultState: TasksState = {
  goal: null,
  goalColor: null,
  tasks: [],
  unprioTasks: [],
  highestPrioTasks: [],
  highPrioTasks: [],
  midPrioTasks: [],
  lowPrioTasks: [],
};

const defaultCtxProviderProps: ContextProvierProps = {
  state: defaultState,
  fetchTasks: () => Promise.resolve(),
  updateTasksPrio: () => Promise.resolve(),
  updatePrioTasksIndex: () => Promise.resolve(),
};

export const TasksContext = React.createContext(defaultCtxProviderProps);

export const TasksContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, defaultState);

  const boundActions = {
    fetchTasks: fetchTasks(dispatch),
    updateTasksPrio: updateTasksPrio(dispatch),
    updatePrioTasksIndex: updatePrioTasksIndex(dispatch),
  };

  return (
    <TasksContext.Provider value={{ state, ...boundActions }}>
      {children}
    </TasksContext.Provider>
  );
};
