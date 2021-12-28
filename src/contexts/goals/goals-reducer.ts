/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import { GoalsState, GoalsAction } from "./types";

export default (state: GoalsState, action: GoalsAction): GoalsState => {
  switch (action.type) {
    case "FETCH_GOALS":
      return { ...state, ...action.payload! };
    case "ERROR":
      return { ...state, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};
