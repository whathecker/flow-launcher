import { BSON } from "realm";
import PriorityModel from "./priority";

class TaskModel {
  constructor(
    public _id: BSON.ObjectId,
    public goal_id: BSON.ObjectId,
    public title: string,
    public description: string,
    public status: string,
    public priority?: PriorityModel,
  ) {}
  public static schema: Realm.ObjectSchema = {
    name: "Task",
    properties: {
      _id: "objectId",
      goal_id: "objectId",
      title: "string",
      description: "string",
      status: { type: "string", default: "open" },
      priority: "Priority?",
    },
    primaryKey: "_id",
  };
}

export default TaskModel;
