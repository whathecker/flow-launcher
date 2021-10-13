import Realm from "realm";
import TaskModel from "./task";

class GoalModel {
  constructor(
    public _id: Realm.BSON.ObjectId,
    public status: string,
    public title: string,
    public motivation: string,
    public reminder: string,
    public tasks: Realm.List<TaskModel>,
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
