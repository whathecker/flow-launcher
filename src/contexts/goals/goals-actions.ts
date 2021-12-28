/* eslint-disable no-console  */
import React from "react";
import { GoalsAction, GoalsActionType } from "./types";

export const fetchGoals = (dispatch: React.Dispatch<GoalsAction>) => {
  return async (): Promise<void> => {
    try {
      // use hook to fetch the data from db
      // update it to context
      console.log("Fetch Goals called");
    } catch (error) {
      dispatch({
        type: GoalsActionType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};
