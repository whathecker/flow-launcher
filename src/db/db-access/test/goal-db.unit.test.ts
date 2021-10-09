/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BSON } from "realm";
import goalDB from "../goal-db";
import { addGoalInput } from "../types/goal-db";

describe("Test db access module of Goal object", () => {
  let goal_id: BSON.ObjectId;

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

  test("Add a goal", () => {
    // TODO: write a test case here
    expect(1).toBe(1);
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
