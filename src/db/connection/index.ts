/* eslint-disable no-console */
import Realm from "realm";
import { GoalModel, TaskModel, PriorityModel } from "../model";

interface OpenDatabaseStatus {
  status: "SUCCESS" | "FAILED";
  databaseInstance?: Realm;
  error?: Error;
}

const openDatabase = async (): Promise<OpenDatabaseStatus> => {
  try {
    const realm = await Realm.open({
      path: "localdata",
      schema: [GoalModel.schema, TaskModel.schema, PriorityModel.schema],
      schemaVersion: 7,
    });
    return Promise.resolve({
      status: "SUCCESS",
      databaseInstance: realm,
    });
  } catch (error) {
    console.error("Failed to open local database: " + error); //TODO: use logger instead
    return Promise.reject({
      status: "FAILED",
      error: error,
    });
  }
};

const closeDatabase = (realm: Realm): void => {
  if (!realm) return;
  realm.close();
};

export { openDatabase, closeDatabase };
