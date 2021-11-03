import { TaskModel } from "../../model";
import { goalDBAccessStatus } from "./goal-db";

export interface addTaskInput {
  title: string;
  description: string; // should be optional
}

export interface taskDBAccessStatus {
  status: "success" | "failed";
  reason?: string;
  error?: Error;
}

export interface singleEntityStatus extends goalDBAccessStatus {
  data?: TaskModel;
}
