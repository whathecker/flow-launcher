/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import { TasksState, TasksAction } from "../../types/contexts/tasks";
import { taskFilters } from "../../utils";

export default (state: TasksState, action: TasksAction): TasksState => {
  switch (action.type) {
    case "FETCH_TASKS": {
      const allTasks = action.payload!.tasks;
      const unprioTasks = taskFilters.filterUnprioritized(allTasks);
      const prioTasks = taskFilters.filterByPriorityScheme(allTasks);

      return {
        ...state,
        ...action.payload!,
        tasks: allTasks,
        unprioTasks: unprioTasks,
        highestPrioTasks: prioTasks.highest,
        highPrioTasks: prioTasks.high,
        midPrioTasks: prioTasks.mid,
        lowPrioTasks: prioTasks.low,
      };
    }
    case "ERROR":
      return { ...state, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};
