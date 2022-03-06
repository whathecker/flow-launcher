import * as Realm from "realm";
import { TaskModel } from "../../model";

export interface IAddTaskInput {
  goal_id: Realm.BSON.ObjectId;
  title: string;
  description: string; //TODO: should be optional
}

export interface IUpdateTaskStatusInput {
  status: string;
}

export interface IUpdateTaskDetailInput {
  title?: string;
  description?: string;
}

export interface IUpdateTaskPriorityInput {
  importance: string;
  urgency: string;
}

type BulkUpdateTaskInput = {
  _id: Realm.BSON.ObjectId;
  importance: string;
  urgency: string;
};

export interface IBulkUpdateTasksPrioInput {
  batch: BulkUpdateTaskInput[];
}

export interface ITaskDBAccessStatus {
  status: "success" | "failed";
  reason?: string;
  error?: Error;
}

export interface ISingleEntityStatus extends ITaskDBAccessStatus {
  data?: TaskModel;
}

export interface IMultiEntityStatus extends ITaskDBAccessStatus {
  data?: TaskModel[];
}
