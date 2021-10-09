import { BSON } from "realm";

class GoalModel {
  constructor(
    public _id: BSON.ObjectId,
    public title: string,
    public motivation: string,
    public reminder: string,
  ) {}

  public static schema: Realm.ObjectSchema = {
    name: "Goal",
    properties: {
      _id: "objectId",
      title: "string",
      motivation: "string",
      reminder: "string",
    },
    primaryKey: "_id",
  };
}

export default GoalModel;
