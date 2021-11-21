/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Realm from "realm";

abstract class DBAccessorBase {
  protected realm;

  constructor(realm: Realm) {
    this.realm = realm;
  }

  protected _findGoalByIdSync(_id: Realm.BSON.ObjectId): Realm.Object | null {
    const goal = this.realm.objects("Goal").find((e) => {
      return this._checkIdenticalIds(e.toJSON()._id, _id);
    });

    if (goal) return goal;

    return null;
  }

  protected _serialize(
    data: Realm.Object | Realm.Results<Realm.Object> | Realm.Object[],
  ) {
    return JSON.parse(JSON.stringify(data));
  }

  protected _checkIdenticalIds(
    first_id: Realm.BSON.ObjectId,
    second_id: Realm.BSON.ObjectId,
  ): boolean {
    const converted_first_id = new Realm.BSON.ObjectID(first_id).toHexString();
    const converted_second_id = new Realm.BSON.ObjectID(
      second_id,
    ).toHexString();

    return converted_first_id === converted_second_id;
  }
}

export default DBAccessorBase;
