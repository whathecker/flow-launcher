/* eslint-disable no-console */
import Realm from "realm";
import { GoalSchema, TaskSchema, PrioritySchema } from "./model";

interface OpenDatabaseStatus {
  status: "SUCCESS" | "FAILED";
  databaseInstance?: Realm;
  error?: Error;
}

const openDatabase = async (): Promise<OpenDatabaseStatus> => {
  try {
    const relam = await Realm.open({
      path: "localdata",
      schema: [GoalSchema, TaskSchema, PrioritySchema],
      schemaVersion: 7,
    });
    return Promise.resolve({
      status: "SUCCESS",
      databaseInstance: relam,
    });
  } catch (error) {
    console.error("Failed to open local database: " + error); //TODO: use logger instead
    return Promise.reject({
      status: "FAILED",
      error: error,
    });
  }
};

export { openDatabase };
