import taskDB from "../task";

describe("Test db access module of Task object", () => {
  beforeEach(async () => {
    await taskDB.dropTasks();
    // add some mock goals here
  });

  afterAll(async () => {
    await taskDB.dropTasks();
  });

  test("Delete all tasks", async () => {
    await taskDB.dropTasks();
    expect(1).toBe(1);
  });
});
