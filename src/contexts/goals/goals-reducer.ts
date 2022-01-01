/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import { GoalsState, GoalsAction } from "../../types/contexts/goals";

export default (state: GoalsState, action: GoalsAction): GoalsState => {
  switch (action.type) {
    case "FETCH_GOALS":
      return { ...state, ...action.payload! };
    case "ADD_GOAL":
      //TODO: make this safer
      state.goals!.push(action.payload!.newGoal!);
      return { ...state };
    case "ERROR":
      return { ...state, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};
