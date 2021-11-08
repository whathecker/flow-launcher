/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Realm from "realm";
import { openDatabase, closeDatabase } from "../../connection";
import GoalDBAccessor from "../goal-db";
import TaskDBAccessor from "../task-db";
import { addTaskInput } from "../types/task-db";
import { addGoalInput } from "../types/goal-db";

describe("Test db access module of Task object", () => {
  let realm: Realm;
  let taskDB: TaskDBAccessor;
  let goalDB: GoalDBAccessor;
  let task_id: Realm.BSON.ObjectId;
  let goal_id: Realm.BSON.ObjectId;

  beforeAll(async () => {
    const connection = await openDatabase();
    realm = connection.databaseInstance!;
    taskDB = new TaskDBAccessor(realm);
    goalDB = new GoalDBAccessor(realm);
  });

  beforeEach(async () => {
    await taskDB.dropTasks();

    const payloadForGoal: addGoalInput = {
      title: "this is a mock goal",
      motivation: "I want to achieve this goal",
      reminder: "daily",
    };

    const newGoalResult = await goalDB.addGoal(payloadForGoal);
    goal_id = newGoalResult.data!._id;

    const payloadForTask: addTaskInput = {
      goal_id: goal_id,
      title: "this is a mock task",
      description: "this is the description of a mock task",
    };

    const result = await taskDB.addTask(payloadForTask);
    task_id = result.data!._id;
  });

  afterAll(async () => {
    await taskDB.dropTasks();
    closeDatabase(realm);
  });

  test("Find a task by id success", async () => {
    const result = await taskDB.findTaskById(task_id);

    expect(result.data!._id).toBe(task_id);
  });

  test("List tasks by goal_id success", async () => {
    const result = await taskDB.listTasksByGoalId(goal_id);

    expect(result.data!).toHaveLength(1);
    expect(result.data![0]._id).toBe(task_id);
  });

  test("Add a task success", async () => {
    const payload: addTaskInput = {
      goal_id: goal_id,
      title: "let's add a new task",
      description: "I want to get this data through",
    };

    const result = await taskDB.addTask(payload);
    const task = result.data!;

    expect(task.status).toBe("open");
    expect(task.title).toBe(payload.title);
    expect(task.description).toBe(payload.description);
    expect(task.priority.tier).toBe("n/a");
    expect(task.priority.urgency).toBe("n/a");
    expect(task.priority.importance).toBe("n/a");

    const goalResult = await goalDB.findGoalById(goal_id);
    const goal = goalResult.data!;

    expect(goal.tasks).toHaveLength(2);
    expect(goal.tasks[goal.tasks.length - 1]).toBe(task._id);
  });

  test("Delete all tasks", () => {
    // delete all tasks here
    expect(1).toBe(1);
  });
});
