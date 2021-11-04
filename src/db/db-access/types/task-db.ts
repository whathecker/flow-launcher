import * as Realm from "realm";
import { TaskModel } from "../../model";
import { goalDBAccessStatus } from "./goal-db";

export interface addTaskInput {
  goal_id: Realm.BSON.ObjectId;
  title: string;
  description: string; //TODO: should be optional
}

export interface taskDBAccessStatus {
  status: "success" | "failed";
  reason?: string;
  error?: Error;
}

export interface singleEntityStatus extends goalDBAccessStatus {
  data?: TaskModel;
}
