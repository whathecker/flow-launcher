/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Realm from "realm";
import { openDatabase, closeDatabase } from "../../connection";
import GoalDBAccessor from "../goal-db";
import TaskDBAccessor from "../task-db";
import {
  addTaskInput,
  updateTaskStatusInput,
  updateTaskDetailInput,
  updateTaskPriorityInput,
} from "../types/task-db";
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

  test("Update task detail success", async () => {
    const payload: updateTaskDetailInput = {
      title: "new title",
      description: "new desciption",
    };

    await taskDB.updateTaskDetail(task_id, payload);
    const result = await taskDB.findTaskById(task_id);
    const task = result.data!;

    expect(task.title).toBe(payload.title);
    expect(task.description).toBe(payload.description);
    expect(task._id).toBe(task_id);
  });

  test("Update task status success", async () => {
    const payload: updateTaskStatusInput = {
      status: "finished",
    };

    await taskDB.updateTaskStatus(task_id, payload);
    const result = await taskDB.findTaskById(task_id);
    const task = result.data!;

    expect(task.status).toBe(payload.status);
  });

  test("Update task status fail - task not found", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    const payload: updateTaskStatusInput = {
      status: "closed",
    };

    await expect(taskDB.updateTaskStatus(fakeId, payload)).rejects.toEqual({
      status: "failed",
      reason: "error",
      error: new Error("task not found"),
    });
  });

  test("Update task status fail - invalid status in payload", async () => {
    const payload: updateTaskStatusInput = {
      status: "closed",
    };
    await expect(taskDB.updateTaskStatus(task_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "error",
      error: new Error("invalid status in the payload"),
    });
  });

  test("Update task status fail - request to update to the same status", async () => {
    const payload: updateTaskStatusInput = {
      status: "open",
    };
    await expect(taskDB.updateTaskStatus(task_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "error",
      error: new Error("requested to update to the same status"),
    });
  });

  test("Update task priority success - to highest tier", async () => {
    const payload: updateTaskPriorityInput = {
      importance: "yes",
      urgency: "yes",
    };

    await taskDB.updateTaskPriority(task_id, payload);
    const result = await taskDB.findTaskById(task_id);
    const task = result.data!;

    expect(task.priority.tier).toBe("highest");
    expect(task.priority.importance).toBe(payload.importance);
    expect(task.priority.urgency).toBe(payload.urgency);
    expect(task._id).toBe(task_id);
  });

  test("Update task priority success - to high tier", async () => {
    const payload: updateTaskPriorityInput = {
      importance: "yes",
      urgency: "no",
    };

    await taskDB.updateTaskPriority(task_id, payload);
    const result = await taskDB.findTaskById(task_id);
    const task = result.data!;

    expect(task.priority.tier).toBe("high");
    expect(task.priority.importance).toBe(payload.importance);
    expect(task.priority.urgency).toBe(payload.urgency);
    expect(task._id).toBe(task_id);
  });

  test("Update task priority success - to mid tier", async () => {
    const payload: updateTaskPriorityInput = {
      importance: "no",
      urgency: "yes",
    };

    await taskDB.updateTaskPriority(task_id, payload);
    const result = await taskDB.findTaskById(task_id);
    const task = result.data!;

    expect(task.priority.tier).toBe("mid");
    expect(task.priority.importance).toBe(payload.importance);
    expect(task.priority.urgency).toBe(payload.urgency);
    expect(task._id).toBe(task_id);
  });

  test("Update task priority success - to low tier", async () => {
    const payload: updateTaskPriorityInput = {
      importance: "no",
      urgency: "no",
    };

    await taskDB.updateTaskPriority(task_id, payload);
    const result = await taskDB.findTaskById(task_id);
    const task = result.data!;

    expect(task.priority.tier).toBe("low");
    expect(task.priority.importance).toBe(payload.importance);
    expect(task.priority.urgency).toBe(payload.urgency);
    expect(task._id).toBe(task_id);
  });

  test("Update task priority fail - task not found", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    const payload: updateTaskPriorityInput = {
      importance: "no",
      urgency: "no",
    };

    await expect(taskDB.updateTaskPriority(fakeId, payload)).rejects.toEqual({
      status: "failed",
      reason: "error",
      error: new Error("task not found"),
    });
  });

  test("Update task priority fail - invalid input in the payload", async () => {
    const payload: updateTaskPriorityInput = {
      importance: "no",
      urgency: "nop",
    };

    await expect(taskDB.updateTaskPriority(task_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "error",
      error: new Error("invalid value in the payload"),
    });
  });

  test("Remove a task success", async () => {
    const result = await taskDB.removeTask(task_id, goal_id);
    const result_goal = await goalDB.findGoalById(goal_id);

    expect(result.status).toBe("success");
    await expect(taskDB.findTaskById(task_id)).rejects.toEqual({
      status: "failed",
      reason: "error",
      error: new Error("task not found"),
    });
    expect(result_goal.data!.tasks).toHaveLength(0);
  });

  test("Delete all tasks", () => {
    // delete all tasks here
    expect(1).toBe(1);
  });
});
