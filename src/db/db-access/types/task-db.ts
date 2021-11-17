import * as Realm from "realm";
import { TaskModel } from "../../model";

export interface addTaskInput {
  goal_id: Realm.BSON.ObjectId;
  title: string;
  description: string; //TODO: should be optional
}

export interface updateeTaskStatusInput {
  status: string;
}

export interface taskDBAccessStatus {
  status: "success" | "failed";
  reason?: string;
  error?: Error;
}

export interface singleEntityStatus extends taskDBAccessStatus {
  data?: TaskModel;
}

export interface multiEntityStatus extends taskDBAccessStatus {
  data?: TaskModel[];
}
