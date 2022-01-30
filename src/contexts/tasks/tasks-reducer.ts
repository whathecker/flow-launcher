/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import { TasksState, TasksAction } from "../../types/contexts/tasks";

export default (state: TasksState, action: TasksAction): TasksState => {
  switch (action.type) {
    case "FETCH_TASKS":
      return { ...state, ...action.payload! };
    case "ERROR":
      return { ...state, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};
