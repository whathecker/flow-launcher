/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as Realm from "realm";
import { openDatabase, closeDatabase } from "../../connection";
import GoalDBAccessor from "../goal-db";
import {
  addGoalInput,
  updateGoalStatusInput,
  updateGoalDetailInput,
} from "../types/goal-db";

describe("Test db access module of Goal object", () => {
  let realm: Realm;
  let goalDB: GoalDBAccessor;
  let goal_id: Realm.BSON.ObjectId;

  beforeAll(async () => {
    const connection = await openDatabase();
    realm = connection.databaseInstance!;
    goalDB = new GoalDBAccessor(realm);
  });

  beforeEach(async () => {
    await goalDB.dropGoals();

    const payload: addGoalInput = {
      title: "this is a mock goal",
      motivation: "I want to achieve this goal",
      reminder: "daily",
    };

    const result = await goalDB.addGoal(payload);

    goal_id = result.data!._id;
  });

  afterAll(async () => {
    await goalDB.dropGoals();
    closeDatabase(realm);
  });

  test("List all goals should return 1 result", async () => {
    const result = await goalDB.listGoals();
    const goals = result.data;

    expect(goals).toHaveLength(1);
  });

  test("Find a goal by _id", async () => {
    const result = await goalDB.findGoalById(goal_id);
    const goal = result.data!;

    expect(goal._id).toBe(goal_id);
  });

  test("Find a goal by id fail - goal not found", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    await expect(goalDB.findGoalById(fakeId)).rejects.toEqual({
      status: "failed",
      reason: "goal not found",
    });
  });

  test("Add a goal success", async () => {
    const payload: addGoalInput = {
      title: "let's add a new goal",
      motivation: "I want to get this data through",
      reminder: "daily",
    };

    const result = await goalDB.addGoal(payload);
    const goal = result.data!;

    expect(goal.status).toBe("open");
    expect(goal.title).toBe(payload.title);
    expect(goal.motivation).toBe(payload.motivation);
    expect(goal.reminder).toBe(payload.reminder);
    expect(goal.tasks).toHaveLength(0);
  });

  test("Update goal status success", async () => {
    const payload: updateGoalStatusInput = {
      status: "finished",
    };
    await goalDB.updateGoalStatus(goal_id, payload);

    const result = await goalDB.findGoalById(goal_id);
    const updated = result.data!;

    expect(updated._id).toBe(goal_id);
    expect(updated.status).toBe(payload.status);
  });

  test("Update a goal status fail - goal not found", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    const payload: updateGoalStatusInput = {
      status: "finished",
    };

    await expect(goalDB.updateGoalStatus(fakeId, payload)).rejects.toEqual({
      status: "failed",
      reason: "goal not found",
    });
  });

  test("Update a goal status - invalid status in the input", async () => {
    const payload: updateGoalStatusInput = {
      status: "finishing",
    };

    await expect(goalDB.updateGoalStatus(goal_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "invalid status in the payload",
    });
  });

  test("Update a goal status - try to update to the same status", async () => {
    const payload: updateGoalStatusInput = {
      status: "open",
    };

    await expect(goalDB.updateGoalStatus(goal_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "requested to update to the same status",
    });
  });

  test("Update a goal detail success", async () => {
    const payload: updateGoalDetailInput = {
      title: "updated title",
      motivation: "this is my new motivation",
      reminder: "three_days",
    };

    await goalDB.updateGoalDetail(goal_id, payload);

    const result = await goalDB.findGoalById(goal_id);
    const updated = result.data!;

    expect(updated._id).toBe(goal_id);
    expect(updated.status).toBe("open");
    expect(updated.title).toBe(payload.title);
    expect(updated.motivation).toBe(payload.motivation);
    expect(updated.reminder).toBe(payload.reminder);
    expect(updated.tasks).toHaveLength(0);
  });

  test("Update a goal detail fail - goal not found", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    const payload: updateGoalDetailInput = {
      title: "updated title",
      motivation: "this is my new motivation",
      reminder: "three_days",
    };

    await expect(goalDB.updateGoalDetail(fakeId, payload)).rejects.toEqual({
      status: "failed",
      reason: "goal not found",
    });
  });

  test("Delete a goal", async () => {
    await goalDB.removeGoal(goal_id);
    const result = await goalDB.listGoals();
    const goals = result.data;

    expect(goals).toHaveLength(0);
  });

  test("Delete all goals", async () => {
    await goalDB.dropGoals();
    const result = await goalDB.listGoals();
    const goals = result.data;

    expect(goals).toHaveLength(0);
  });
});
