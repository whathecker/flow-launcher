/* eslint-disable @typescript-eslint/no-non-null-assertion  */
import React from "react";
import { openDatabase, closeDatabase } from "../../db/connection";
import TaskDBAccessor from "../../db/db-access/task-db";
import {
  BulkUpdateTaskInput,
  IBulkUpdateTasksPrioInput,
  BulkUpdatePrioTaskIndexInput,
  IBulkUpdatePrioTasksIndexInput,
} from "../../db/db-access/types/task-db";
import { TasksAction, TasksReducerType } from "../../types/contexts/tasks";
import {
  IFetchTasksInput,
  IUpdateTasksPrioInput,
  IUpdatePrioTasksIndexInput,
  IUpdateTaskStatusInput,
} from "../../types/core/entity";

export const fetchTasks = (dispatch: React.Dispatch<TasksAction>) => {
  return async (input: IFetchTasksInput): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;
      const taskDB = new TaskDBAccessor(realm);
      const payload = new Realm.BSON.ObjectID(input.goal._id!);
      const { data } = await taskDB.listTasksByGoalId(payload);
      closeDatabase(realm);
      dispatch({
        type: TasksReducerType.fetchTasks,
        payload: { tasks: data, goal: input.goal, goalColor: input.goalColor },
      });
    } catch (error) {
      dispatch({
        type: TasksReducerType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};

export const updateTasksPrio = (dispatch: React.Dispatch<TasksAction>) => {
  return async (input: IUpdateTasksPrioInput): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;

      const updatePayload = _buildUpdateTasksPrioPayload(input);
      const taskDB = new TaskDBAccessor(realm);
      await taskDB.bulkUpdateTasksPrio(updatePayload);

      const fetchPayload = new Realm.BSON.ObjectID(input.goal_id);
      const { data } = await taskDB.listTasksByGoalId(fetchPayload);

      closeDatabase(realm);
      dispatch({
        type: TasksReducerType.fetchTasks,
        payload: { tasks: data },
      });
    } catch (error) {
      dispatch({
        type: TasksReducerType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};

export const updatePrioTasksIndex = (dispatch: React.Dispatch<TasksAction>) => {
  return async (input: IUpdatePrioTasksIndexInput): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;

      const updatePayload = _buildUpdatePrioTasksIndexPayload(input);
      const taskDB = new TaskDBAccessor(realm);
      await taskDB.bulkUpdatePrioTasksIndex(updatePayload);

      const fetchPayload = new Realm.BSON.ObjectID(input.goal_id);
      const { data } = await taskDB.listTasksByGoalId(fetchPayload);

      closeDatabase(realm);
      dispatch({
        type: TasksReducerType.fetchTasks,
        payload: { tasks: data },
      });
    } catch (error) {
      dispatch({
        type: TasksReducerType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};

export const updateTaskStatus = (dispatch: React.Dispatch<TasksAction>) => {
  return async (input: IUpdateTaskStatusInput): Promise<void> => {
    try {
      const connection = await openDatabase();
      const realm = connection.databaseInstance!;
      const taskDB = new TaskDBAccessor(realm);

      const task_id = new Realm.BSON.ObjectID(input.task_id);

      // TODO: the payload is odd => restructure it
      await taskDB.updateTaskStatus(task_id, { status: input.status });

      const fetchPayload = new Realm.BSON.ObjectID(input.goal_id);
      const { data } = await taskDB.listTasksByGoalId(fetchPayload);

      closeDatabase(realm);

      dispatch({
        type: TasksReducerType.fetchTasks,
        payload: { tasks: data },
      });
    } catch (error) {
      dispatch({
        type: TasksReducerType.error,
        payload: { errorMsg: error.message },
      });
    }
  };
};

function _buildUpdateTasksPrioPayload(
  input: IUpdateTasksPrioInput,
): IBulkUpdateTasksPrioInput {
  const batch: BulkUpdateTaskInput[] = [];

  input.tasks.forEach((task) => {
    const item: BulkUpdateTaskInput = {
      _id: new Realm.BSON.ObjectID(task._id),
      importance: task.priority!.importance,
      urgency: task.priority!.urgency,
    };
    batch.push(item);
  });
  return { batch: batch };
}

function _buildUpdatePrioTasksIndexPayload(
  input: IUpdatePrioTasksIndexInput,
): IBulkUpdatePrioTasksIndexInput {
  const batch: BulkUpdatePrioTaskIndexInput[] = [];

  input.tasks.forEach((task) => {
    const item: BulkUpdatePrioTaskIndexInput = {
      _id: new Realm.BSON.ObjectID(task._id),
      index: task.priority!.index,
    };
    batch.push(item);
  });
  return { batch: batch };
}
