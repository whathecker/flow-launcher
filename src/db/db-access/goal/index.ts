/* eslint-disable no-console  */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { openDatabase, closeDatabase } from "../../connection";

/*
const listGoals = () => {
  // list all goals in the database
};

const addGoal = () => {};

const findGoalById = () => {
  // Is this required? -> Depends on what data will be returned at the listGoals
};

const removeGoal = () => {}; */

const dropGoals = async (): Promise<void> => {
  try {
    const result = await openDatabase();
    const realm = result.databaseInstance!;
    realm.write(() => {
      realm.delete(realm.objects("Goal"));
    });
    console.log("Delete went through");
    closeDatabase();
  } catch (error) {
    console.error(error);
    //TODO: add error handling
  }
};

export default {
  //listGoals,
  //addGoal,
  //findGoalById,
  //removeGoal,
  dropGoals,
};
