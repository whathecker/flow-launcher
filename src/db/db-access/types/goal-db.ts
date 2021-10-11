import { GoalModel, TaskModel } from "../../model";

export interface addGoalInput {
  title: string;
  motivation: string;
  reminder: string;
  status?: string;
  tasks?: TaskModel[] | [];
}

export interface goalDBAccessStatus {
  status: "success" | "failed";
  reason?: string;
  error?: Error;
}

export interface singleEntityStatus extends goalDBAccessStatus {
  data?: GoalModel;
}

export interface multiEntityStatus extends goalDBAccessStatus {
  data?: GoalModel[];
}
