/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Realm from "realm";
import { openDatabase, closeDatabase } from "../../connection";
import GoalDBAccessor from "../goal-db";
import TaskDBAccessor from "../task-db";
import {
  IAddTaskInput,
  IUpdateTaskStatusInput,
  IUpdateTaskDetailInput,
  IUpdateTaskPriorityInput,
  IBulkUpdateTasksPrioInput,
} from "../types/task-db";
import { addGoalInput } from "../types/goal-db";

describe("Test db access module of Task object", () => {
  let realm: Realm;
  let taskDB: TaskDBAccessor;
  let goalDB: GoalDBAccessor;
  let task_id: Realm.BSON.ObjectId;
  let task_id_2: Realm.BSON.ObjectId;
  let task_id_3: Realm.BSON.ObjectId;
  let task_id_4: Realm.BSON.ObjectId;
  let goal_id: Realm.BSON.ObjectId;

  beforeAll(async () => {
    const connection = await openDatabase();
    realm = connection.databaseInstance!;
    taskDB = new TaskDBAccessor(realm);
    goalDB = new GoalDBAccessor(realm);
  });

  beforeEach(async () => {
    await goalDB.dropGoals();
    await taskDB.dropTasks();

    const payloadForGoal: addGoalInput = {
      title: "this is a mock goal",
      motivation: "I want to achieve this goal",
      reminder: "daily",
    };

    const newGoalResult = await goalDB.addGoal(payloadForGoal);
    goal_id = newGoalResult.data!._id;

    const payloadForTask: IAddTaskInput[] = [
      {
        goal_id: goal_id,
        title: "this is a mock task",
        description: "this is the description of a mock task",
      },
      {
        goal_id: goal_id,
        title: "this is a mock task - 2",
        description: "this is the description of a mock task -2",
      },
      {
        goal_id: goal_id,
        title: "this is a mock task - 3",
        description: "this is the description of a mock task -3",
      },
      {
        goal_id: goal_id,
        title: "this is a mock task - 4",
        description: "this is the description of a mock task -4",
      },
    ];

    const result = await taskDB.addTask(payloadForTask[0]);
    const result2 = await taskDB.addTask(payloadForTask[1]);
    const result3 = await taskDB.addTask(payloadForTask[2]);
    const result4 = await taskDB.addTask(payloadForTask[3]);
    task_id = result.data!._id;
    task_id_2 = result2.data!._id;
    task_id_3 = result3.data!._id;
    task_id_4 = result4.data!._id;
  });

  afterAll(async () => {
    await goalDB.dropGoals();
    await taskDB.dropTasks();
    closeDatabase(realm);
  });

  test("Find a task by id success", async () => {
    const result = await taskDB.findTaskById(task_id);

    expect(result.data!._id).toBe(task_id);
  });

  test("Find a task by id fail", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    await expect(taskDB.findTaskById(fakeId)).rejects.toEqual({
      status: "failed",
      reason: "task not found",
    });
  });

  test("List tasks by goal_id success", async () => {
    const result = await taskDB.listTasksByGoalId(goal_id);

    expect(result.data!).toHaveLength(4);
    expect(result.data![0]._id).toBe(task_id);
  });

  test("Add a task success", async () => {
    const payload: IAddTaskInput = {
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

    expect(goal.tasks).toHaveLength(5);
    expect(goal.tasks[goal.tasks.length - 1]).toBe(task._id);
  });

  test("Add a task fail: non-existing goal_id", async () => {
    const payload: IAddTaskInput = {
      goal_id: new Realm.BSON.ObjectID(),
      title: "let's add a new task",
      description: "I want to get this data through",
    };

    await expect(taskDB.addTask(payload)).rejects.toEqual({
      status: "failed",
      reason: "cannot find a goal, please check your input: goal_id",
    });
  });

  test("Update task detail success", async () => {
    const payload: IUpdateTaskDetailInput = {
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

  test("Update task detail fail - task not found", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    const payload: IUpdateTaskDetailInput = {
      title: "new title",
      description: "new desciption",
    };

    await expect(taskDB.updateTaskDetail(fakeId, payload)).rejects.toEqual({
      status: "failed",
      reason: "task not found",
    });
  });

  test("Update task status success", async () => {
    const payload: IUpdateTaskStatusInput = {
      status: "finished",
    };

    await taskDB.updateTaskStatus(task_id, payload);
    const result = await taskDB.findTaskById(task_id);
    const task = result.data!;

    expect(task.status).toBe(payload.status);
  });

  test("Update task status fail - task not found", async () => {
    const fakeId = new Realm.BSON.ObjectID();
    const payload: IUpdateTaskStatusInput = {
      status: "closed",
    };

    await expect(taskDB.updateTaskStatus(fakeId, payload)).rejects.toEqual({
      status: "failed",
      reason: "task not found",
    });
  });

  test("Update task status fail - invalid status in payload", async () => {
    const payload: IUpdateTaskStatusInput = {
      status: "closed",
    };
    await expect(taskDB.updateTaskStatus(task_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "invalid status in the payload",
    });
  });

  test("Update task status fail - request to update to the same status", async () => {
    const payload: IUpdateTaskStatusInput = {
      status: "open",
    };
    await expect(taskDB.updateTaskStatus(task_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "requested to update to the same status",
    });
  });

  test("Update task priority success - to highest tier", async () => {
    const payload: IUpdateTaskPriorityInput = {
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
    const payload: IUpdateTaskPriorityInput = {
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
    const payload: IUpdateTaskPriorityInput = {
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
    const payload: IUpdateTaskPriorityInput = {
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
    const payload: IUpdateTaskPriorityInput = {
      importance: "no",
      urgency: "no",
    };

    await expect(taskDB.updateTaskPriority(fakeId, payload)).rejects.toEqual({
      status: "failed",
      reason: "task not found",
    });
  });

  test("Update task priority fail - invalid input in the payload", async () => {
    const payload: IUpdateTaskPriorityInput = {
      importance: "no",
      urgency: "nop",
    };

    await expect(taskDB.updateTaskPriority(task_id, payload)).rejects.toEqual({
      status: "failed",
      reason: "invalid value in the payload",
    });
  });

  test("bulkUpdateTasksPrio success", async () => {
    const payload: IBulkUpdateTasksPrioInput = {
      batch: [
        {
          _id: task_id,
          importance: "yes",
          urgency: "yes",
        },
        {
          _id: task_id_2,
          importance: "yes",
          urgency: "no",
        },
        {
          _id: task_id_3,
          importance: "no",
          urgency: "yes",
        },
        {
          _id: task_id_4,
          importance: "no",
          urgency: "no",
        },
      ],
    };

    await taskDB.bulkUpdateTasksPrio(payload);

    const result = await taskDB.findTaskById(payload.batch[0]._id);
    const result2 = await taskDB.findTaskById(payload.batch[1]._id);
    const result3 = await taskDB.findTaskById(payload.batch[2]._id);
    const result4 = await taskDB.findTaskById(payload.batch[3]._id);

    const task = result.data!;
    const task2 = result2.data!;
    const task3 = result3.data!;
    const task4 = result4.data!;

    expect(task.priority.tier).toBe("highest");
    expect(task.priority.importance).toBe(payload.batch[0].importance);
    expect(task.priority.urgency).toBe(payload.batch[0].urgency);
    expect(task._id).toBe(payload.batch[0]._id);

    expect(task2.priority.tier).toBe("high");
    expect(task2.priority.importance).toBe(payload.batch[1].importance);
    expect(task2.priority.urgency).toBe(payload.batch[1].urgency);
    expect(task2._id).toBe(payload.batch[1]._id);

    expect(task3.priority.tier).toBe("mid");
    expect(task3.priority.importance).toBe(payload.batch[2].importance);
    expect(task3.priority.urgency).toBe(payload.batch[2].urgency);
    expect(task3._id).toBe(payload.batch[2]._id);

    expect(task4.priority.tier).toBe("low");
    expect(task4.priority.importance).toBe(payload.batch[3].importance);
    expect(task4.priority.urgency).toBe(payload.batch[3].urgency);
    expect(task4._id).toBe(payload.batch[3]._id);
  });

  test("bulkUpdateTasksPrio fail - unknown task id", async () => {
    const payload: IBulkUpdateTasksPrioInput = {
      batch: [
        {
          _id: new Realm.BSON.ObjectID(),
          importance: "yes",
          urgency: "yes",
        },
        {
          _id: task_id_2,
          importance: "yes",
          urgency: "no",
        },
        {
          _id: task_id_3,
          importance: "no",
          urgency: "yes",
        },
        {
          _id: task_id_4,
          importance: "no",
          urgency: "no",
        },
      ],
    };
    await expect(taskDB.bulkUpdateTasksPrio(payload)).rejects.toEqual({
      status: "failed",
      reason: "task not found",
    });

    const result = await taskDB.findTaskById(payload.batch[1]._id);
    expect(result.data?.priority.importance).not.toBe(
      payload.batch[1].importance,
    );
    expect(result.data?.priority.urgency).not.toBe(payload.batch[1].urgency);
  });

  test("bulkUpdateTasksPrio fail - invalid input in the payload", async () => {
    const payload: IBulkUpdateTasksPrioInput = {
      batch: [
        {
          _id: task_id,
          importance: "n/a",
          urgency: "yes",
        },
        {
          _id: task_id_2,
          importance: "yes",
          urgency: "no",
        },
        {
          _id: task_id_3,
          importance: "no",
          urgency: "yes",
        },
        {
          _id: task_id_4,
          importance: "no",
          urgency: "no",
        },
      ],
    };
    await expect(taskDB.bulkUpdateTasksPrio(payload)).rejects.toEqual({
      status: "failed",
      reason: "invalid value in the payload",
    });

    const result = await taskDB.findTaskById(payload.batch[1]._id);
    expect(result.data?.priority.importance).not.toBe(
      payload.batch[1].importance,
    );
    expect(result.data?.priority.urgency).not.toBe(payload.batch[1].urgency);
  });

  test("Remove a task success", async () => {
    const result = await taskDB.removeTask(task_id, goal_id);
    const result_goal = await goalDB.findGoalById(goal_id);

    expect(result.status).toBe("success");
    await expect(taskDB.findTaskById(task_id)).rejects.toEqual({
      status: "failed",
      reason: "task not found",
    });
    expect(result_goal.data!.tasks).toHaveLength(3);
  });
});
