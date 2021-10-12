import { BSON } from "realm";
import TaskModel from "./priority";

class GoalModel {
  constructor(
    public _id: BSON.ObjectId,
    public status: string,
    public title: string,
    public motivation: string,
    public reminder: string,
    public recentlyAddedTasks: TaskModel[],
    public tierOneTasks: TaskModel[],
    public tierTwoTasks: TaskModel[],
    public tierThreeTasks: TaskModel[],
    public tierFourTasks: TaskModel[],
  ) {}

  public static schema: Realm.ObjectSchema = {
    name: "Goal",
    properties: {
      _id: "objectId",
      status: { type: "string", default: "open" },
      title: "string",
      motivation: "string",
      reminder: "string",
      recentlyAddedTasks: { type: "list", objectType: "Task" },
      tierOneTasks: { type: "list", objectType: "Task" },
      tierTwoTasks: { type: "list", objectType: "Task" },
      tierThreeTasks: { type: "list", objectType: "Task" },
      tierFourTasks: { type: "list", objectType: "Task" },
    },
    primaryKey: "_id",
  };
}

export default GoalModel;
