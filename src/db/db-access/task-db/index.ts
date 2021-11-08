import * as Realm from "realm";
import DBAccessorBase from "../base";
import { TaskModel } from "../../model";
import { addTaskInput, singleEntityStatus } from "../types/task-db";
import { multiEntityStatus } from "../types/goal-db";

class TaskDBAccessor extends DBAccessorBase {
  public async findTaskById(
    _id: Realm.BSON.ObjectId,
  ): Promise<singleEntityStatus> {
    try {
      const task = this.realm.objectForPrimaryKey(
        "Task",
        new Realm.BSON.ObjectID(_id),
      );

      if (!task) {
        return Promise.reject({
          status: "failed",
          reason: "task not found",
        });
      }

      return Promise.resolve({
        status: "success",
        data: this._serialize(task),
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async listTasksByGoalId(
    goal_id: Realm.BSON.ObjectId,
  ): Promise<multiEntityStatus> {
    try {
      const tasks = this.realm.objects("Task");

      const filteredTasks = tasks.filter((task) => {
        const taskInJSON = task.toJSON();

        return this._checkIdenticalIds(taskInJSON.goal_id, goal_id);
      });

      return Promise.resolve({
        status: "success",
        data: this._serialize(filteredTasks),
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async addTask(payload: addTaskInput): Promise<singleEntityStatus> {
    try {
      let task;
      const goal = this._findGoalByIdSync(payload.goal_id);

      if (!goal) {
        throw new Error(
          "AddTask failed: cannot find a goal, please check your input: goal_id",
        );
      }

      this.realm.write(() => {
        task = this._writeNewTask(payload);
        this._updateGoalWithNewTask(goal, task._id);
      });

      return Promise.resolve({
        status: "success",
        data: JSON.parse(JSON.stringify(task)),
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  public async dropTasks(): Promise<void> {
    try {
      this.realm.write(() => {
        this.realm.delete(this.realm.objects("Task"));
      });
    } catch (error) {
      return Promise.reject({
        status: "failed",
        reason: "error",
        error: error,
      });
    }
  }

  // public: listTaskByGoal (may not needed)
  // public: removeTask
  // public: updateTask (priority)
  // public: batchUpdateTask (priority)

  private _writeNewTask(input: addTaskInput): TaskModel {
    const newTask: RealmInsertionModel<TaskModel> = {
      _id: new Realm.BSON.ObjectID(),
      ...input,
      goal_id: new Realm.BSON.ObjectID(input.goal_id),
      status: "open",
      priority: {
        tier: "n/a",
        importance: "n/a",
        urgency: "n/a",
      },
    };

    return this.realm.create("Task", newTask);
  }

  private _updateGoalWithNewTask(
    goal: Realm.Object,
    task_id: Realm.BSON.ObjectId,
  ): void {
    const serializedGoal = this._serialize(goal);
    serializedGoal.tasks.push(task_id.toHexString());
    serializedGoal._id = new Realm.BSON.ObjectID(serializedGoal._id);

    this.realm.create("Goal", serializedGoal, "modified");
  }
}

export default TaskDBAccessor;
