/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import React from "react";
import { openDatabase, closeDatabase } from "../../db/connection";
import TaskDBAccessor from "../../db/db-access/task-db";
import { TasksAction, TasksActionType } from "../../types/contexts/tasks";
import { IFetchTasksInput } from "../../types/core/entity";

export const fetchTasks = (dispatch: React.Dispatch<TasksAction>) => {
  return async (input: IFetchTasksInput): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;
      const taskDB = new TaskDBAccessor(realm);
      const payload = new Realm.BSON.ObjectID(input.goal_id);
      const { data } = await taskDB.listTasksByGoalId(payload);
      closeDatabase(realm);
      dispatch({
        type: TasksActionType.fetchTasks,
        payload: { tasks: data, goal_id: input.goal_id },
      });
    } catch (error) {
      dispatch({
        type: TasksActionType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};
