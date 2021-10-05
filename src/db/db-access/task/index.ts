/* eslint-disable no-console  */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { openDatabase, closeDatabase } from "../../connection";

const dropTasks = async (): Promise<void> => {
  try {
    const result = await openDatabase();
    const realm = result.databaseInstance!;
    realm.write(() => {
      realm.delete(realm.objects("Task"));
    });
    console.log("Delete went through");
    closeDatabase();
  } catch (error) {
    console.error(error);
    //TODO: add error handling
  }
};

export default {
  dropTasks,
};

/*
const listTasksByGoal = () => {};

const addTask = () => {};

const updateTaskPriority = () => {};

const batchUpdateTaskPriority = () => {};

const updateTaskStatus = () => {};

const removeTask = () => {};

const dropTasks = () => {}; */
