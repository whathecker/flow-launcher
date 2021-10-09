/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BSON } from "realm";
import { openDatabase } from "../../connection";
import { GoalModel } from "../../model";
import {
  addGoalInput,
  goalDBAccessStatus,
  singleEntityStatus,
  multiEntityStatus,
} from "../types/goal-db";

function _serialize(data: Realm.Object | Realm.Results<Realm.Object>) {
  return JSON.parse(JSON.stringify(data));
}

const removeGoal = async (_id: BSON.ObjectId): Promise<goalDBAccessStatus> => {
  try {
    const result = await openDatabase();
    const realm = result.databaseInstance!;

    realm.write(() => {
      const goal = realm.objectForPrimaryKey("Goal", new BSON.ObjectID(_id));
      realm.delete(goal);
    });

    return Promise.resolve({
      status: "success",
    });
  } catch (error) {
    return Promise.reject({
      status: "failed",
      reason: "error",
      error: error,
    });
  }
};

const findGoalById = async (
  _id: BSON.ObjectId,
): Promise<singleEntityStatus> => {
  try {
    const result = await openDatabase();
    const realm = result.databaseInstance!;

    const goal = realm.objectForPrimaryKey("Goal", new BSON.ObjectID(_id));

    if (!goal) {
      return Promise.reject({
        status: "failed",
        reason: "goal not found",
      });
    }

    return Promise.resolve({
      status: "success",
      data: _serialize(goal),
    });
  } catch (error) {
    return Promise.reject({
      status: "failed",
      reason: "error",
      error: error,
    });
  }
};

const listGoals = async (): Promise<multiEntityStatus> => {
  try {
    const result = await openDatabase();
    const realm = result.databaseInstance!;

    const goals = realm.objects("Goal");

    return Promise.resolve({
      status: "success",
      data: _serialize(goals),
    });
  } catch (error) {
    return Promise.reject({
      status: "failed",
      reason: "error",
      error: error,
    });
  }
};

const addGoal = async (payload: addGoalInput): Promise<singleEntityStatus> => {
  try {
    //TODO: valiidate input and return appropriate result
    const result = await openDatabase();
    const realm = result.databaseInstance!;

    const newGoal: RealmInsertionModel<GoalModel> = {
      _id: new BSON.ObjectId(),
      ...payload,
    };

    let goal;

    realm.write(() => {
      goal = realm.create("Goal", newGoal) as Realm.Object;
    });

    return Promise.resolve({
      status: "success",
      data: JSON.parse(JSON.stringify(goal)),
    });
  } catch (error) {
    return Promise.reject({
      status: "failed",
      reason: "error",
      error: error,
    });
  }
};

const dropGoals = async (): Promise<void> => {
  try {
    const result = await openDatabase();
    const realm = result.databaseInstance!;
    realm.write(() => {
      realm.delete(realm.objects("Goal"));
    });
  } catch (error) {
    return Promise.reject({
      status: "failed",
      reason: "error",
      error: error,
    });
  }
};

export default {
  findGoalById,
  listGoals,
  addGoal,
  removeGoal,
  dropGoals,
};
