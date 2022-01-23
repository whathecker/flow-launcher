/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import React from "react";
import { openDatabase, closeDatabase } from "../../db/connection";
import GoalDBAccessor from "../../db/db-access/goal-db";
import TaskDBAccessor from "../../db/db-access/task-db";
import { GoalsAction, GoalsActionType } from "../../types/contexts/goals";
import { IAddGoalInput, IAddTaskInput } from "../../types/core/entity";

export const fetchGoals = (dispatch: React.Dispatch<GoalsAction>) => {
  return async (): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;
      const goalDB = new GoalDBAccessor(realm);
      const { data } = await goalDB.listGoals();
      closeDatabase(realm);
      dispatch({
        type: GoalsActionType.fetchGoals,
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

export const addGoal = (dispatch: React.Dispatch<GoalsAction>) => {
  return async (input: IAddGoalInput): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;
      const goalDB = new GoalDBAccessor(realm);
      const { data } = await goalDB.addGoal(input);
      closeDatabase(realm);
      dispatch({
        type: GoalsActionType.addGoal,
        payload: { newGoal: data },
      });
    } catch (error) {
      dispatch({
        type: GoalsActionType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};

export const addTaskToGoal = (dispatch: React.Dispatch<GoalsAction>) => {
  return async (input: IAddTaskInput): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;
      const taskDB = new TaskDBAccessor(realm);
      const payload = {
        ...input,
        goal_id: new Realm.BSON.ObjectID(input.goal_id),
      };
      const { data } = await taskDB.addTask(payload);
      closeDatabase(realm);
      dispatch({
        type: GoalsActionType.addTask,
        payload: { newTask: data },
      });
    } catch (error) {
      dispatch({
        type: GoalsActionType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};
