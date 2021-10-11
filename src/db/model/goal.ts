import { BSON } from "realm";
import TaskModel from "./priority";

class GoalModel {
  constructor(
    public _id: BSON.ObjectId,
    public status: string,
    public title: string,
    public motivation: string,
    public reminder: string,
    public tasks: TaskModel[],
  ) {}

  public static schema: Realm.ObjectSchema = {
    name: "Goal",
    properties: {
      _id: "objectId",
      status: { type: "string", default: "open" },
      title: "string",
      motivation: "string",
      reminder: "string",
      tasks: { type: "list", objectType: "Task" },
    },
    primaryKey: "_id",
  };
}

export default GoalModel;
