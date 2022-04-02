/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import { GoalsState, GoalsAction } from "../../types/contexts/goals";

export default (state: GoalsState, action: GoalsAction): GoalsState => {
  switch (action.type) {
    case "FETCH_GOALS":
      return { ...state, ...action.payload! };
    case "ADD_GOAL":
      state.goals!.push(action.payload!.newGoal!);
      return { ...state };
    case "ADD_TASK": {
      const newTask = action.payload!.newTask!;
      const indexOfGoal = state.goals!.findIndex(
        (e) => e._id === newTask.goal_id,
      );
      state.goals![indexOfGoal].tasks.push(newTask._id as string);
      return { ...state };
    }
    case "ERROR":
      return { ...state, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};
