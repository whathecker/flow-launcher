import Realm from "realm";
import GoalModel from "./goal";
import PriorityModel from "./priority";

class TaskModel {
  constructor(
    public _id: Realm.BSON.ObjectId,
    public goalOfTask: Realm.Results<GoalModel>,
    public title: string,
    public description: string, // should made optional
    public status: string,
    public priority: PriorityModel,
  ) {}
  public static schema: Realm.ObjectSchema = {
    name: "Task",
    properties: {
      _id: "objectId",
      goalOfTask: {
        type: "linkingObjects",
        objectType: "Goal",
        property: "tasks",
      },
      title: "string",
      description: "string",
      status: { type: "string", default: "open" },
      priority: "Priority",
    },
    primaryKey: "_id",
  };
}

export default TaskModel;
