import { BSON } from "realm";
import PriorityModel from "./priority";

class TaskModel {
  constructor(
    public title: string,
    public description: string,
    public status: string,
    public priority?: PriorityModel,
    public _id?: BSON.ObjectId,
  ) {}
  public static schema: Realm.ObjectSchema = {
    name: "Task",
    properties: {
      title: "string",
      description: "string",
      status: { type: "string", default: "open" },
      priority: "Priority?",
      _id: "objectId?",
    },
  };
}

export default TaskModel;
