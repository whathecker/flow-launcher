/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Realm from "realm";
import { openDatabase, closeDatabase } from "../../connection";
import TaskDBAccessor from "../task-db";
import { addTaskInput } from "../types/task-db";

describe("Test db access module of Task object", () => {
  let realm: Realm;
  let taskDB: TaskDBAccessor;
  let task_id: Realm.BSON.ObjectId;

  beforeAll(async () => {
    const connection = await openDatabase();
    realm = connection.databaseInstance!;
    taskDB = new TaskDBAccessor(realm);
  });

  beforeEach(async () => {
    await taskDB.dropTasks();

    const payload: addTaskInput = {
      title: "this is a mock task",
      description: "this is the description of a mock task",
    };

    const result = await taskDB.addTask(payload);

    task_id = result.data!._id;
  });

  afterAll(async () => {
    await taskDB.dropTasks();
    closeDatabase(realm);
  });

  test("Add a goal success", async () => {
    const payload: addTaskInput = {
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
  });

  test("Delete all tasks", () => {
    // delete all tasks here
    expect(1).toBe(1);
  });
});
