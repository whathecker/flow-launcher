/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import React from "react";
import { GoalsAction, GoalsActionType } from "./types";
import { openDatabase, closeDatabase } from "../../db/connection";
import GoalDBAccessor from "../../db/db-access/goal-db";

export const fetchGoals = (dispatch: React.Dispatch<GoalsAction>) => {
  return async (): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;
      const goalDB = new GoalDBAccessor(realm);
      const { data } = await goalDB.listGoals();
      closeDatabase(realm);
      dispatch({
        type: GoalsActionType.fetch,
        //TODO: serialize from GoalModel to Goal
        payload: { goals: data },
      });
    } catch (error) {
      dispatch({
        type: GoalsActionType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};
