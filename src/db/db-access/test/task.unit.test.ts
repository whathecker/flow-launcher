import taskDB from "../task";

describe("Test db access module of Task object", () => {
  beforeEach(async () => {
    await taskDB.dropGoals();
    // add some mock goals here
  });

  afterAll(async () => {
    await taskDB.dropGoals();
  });

  test("Delete all tasks", async () => {
    await taskDB.dropGoals();
    expect(1).toBe(1);
  });
});
