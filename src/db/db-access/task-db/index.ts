import * as Realm from "realm";
import DBAccessorBase from "../base";
import { TaskModel } from "../../model";
import { addTaskInput, singleEntityStatus } from "../types/task-db";

class TaskDBAccessor extends DBAccessorBase {
  public async addTask(payload: addTaskInput): Promise<singleEntityStatus> {
    try {
      const newTask: RealmInsertionModel<TaskModel> = {
        _id: new Realm.BSON.ObjectID(),
        ...payload,
        status: "open",
        priority: {
          tier: "n/a",
          importance: "n/a",
          urgency: "n/a",
        },
      };

      let task;

      this.realm.write(() => {
        task = this.realm.create("Task", newTask) as Realm.Object;
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
  // public: removeTask
  // public: findTaskById
  // public: listTaskByGoal (may not needed)
  // public: dropTasks

  // public: updateTask (priority)
  // public: batchUpdateTask (priority)
}

export default TaskDBAccessor;
