/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Realm from "realm";

abstract class DBAccessorBase {
  protected realm;

  constructor(realm: Realm) {
    this.realm = realm;
  }

  protected _findGoalByIdSync(_id: Realm.BSON.ObjectId): Realm.Object | null {
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

  protected _serialize(data: Realm.Object | Realm.Results<Realm.Object>) {
    return JSON.parse(JSON.stringify(data));
  }
}

export default DBAccessorBase;
