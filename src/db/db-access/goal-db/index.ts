import * as Realm from "realm";
import { GoalModel } from "../../model";
import {
  addGoalInput,
  updateGoalInput,
  goalDBAccessStatus,
  singleEntityStatus,
  multiEntityStatus,
} from "../types/goal-db";

class GoalDBAccessor {
  private realm;

  constructor(realm: Realm) {
    this.realm = realm;
  }

  public async listGoals(): Promise<multiEntityStatus> {
    try {
      const goals = this.realm.objects("Goal");
      return Promise.resolve({
        status: "success",
        data: this._serialize(goals),
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async findGoalById(
    _id: Realm.BSON.ObjectId,
  ): Promise<singleEntityStatus> {
    try {
      const goal = this.realm.objectForPrimaryKey(
        "Goal",
        new Realm.BSON.ObjectID(_id),
      );

      if (!goal) {
        return Promise.reject({
          status: "failed",
          reason: "goal not found",
        });
      }

      return Promise.resolve({
        status: "success",
        data: this._serialize(goal),
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async addGoal(payload: addGoalInput): Promise<singleEntityStatus> {
    try {
      const newGoal: RealmInsertionModel<GoalModel> = {
        _id: new Realm.BSON.ObjectId(),
        ...payload,
      };

      let goal;

      this.realm.write(() => {
        goal = this.realm.create("Goal", newGoal) as Realm.Object;
      });

      return Promise.resolve({
        status: "success",
        data: JSON.parse(JSON.stringify(goal)),
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async updateGoal(
    _id: Realm.BSON.ObjectId,
    payload: updateGoalInput,
  ): Promise<singleEntityStatus> {
    try {
      let updatedGoal;

      this.realm.write(() => {
        const goal = this._findGoalByIdSync(_id);

        if (goal) {
          updatedGoal = this.realm.create(
            "Goal",
            {
              _id: new Realm.BSON.ObjectID(_id),
              ...payload,
            },
            "modified",
          );
        }
      });

      return Promise.resolve({
        status: "success",
        data: updatedGoal,
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async removeGoal(
    _id: Realm.BSON.ObjectId,
  ): Promise<goalDBAccessStatus> {
    try {
      this.realm.write(() => {
        const goal = this.realm.objectForPrimaryKey(
          "Goal",
          new Realm.BSON.ObjectID(_id),
        );
        this.realm.delete(goal);
      });
      return Promise.resolve({ status: "success" });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async dropGoals(): Promise<void> {
    try {
      this.realm.write(() => {
        this.realm.delete(this.realm.objects("Goal"));
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  private _findGoalByIdSync(_id: Realm.BSON.ObjectId): Realm.Object | null {
    const goal = this.realm.objects("Goal").find((e) => {
      const idFromDatabase = new Realm.BSON.ObjectID(
        e.toJSON()._id,
      ).toHexString();
      const idFromPayload = new Realm.BSON.ObjectID(_id).toHexString();
      return idFromDatabase === idFromPayload;
    });

    if (goal) return goal;

    return null;
  }

  private _serialize(data: Realm.Object | Realm.Results<Realm.Object>) {
    return JSON.parse(JSON.stringify(data));
  }
}

export default GoalDBAccessor;