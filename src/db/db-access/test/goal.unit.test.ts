import goalDB from "../goal";

describe("Test db access module of Goal object", () => {
  beforeEach(async () => {
    await goalDB.dropGoals();
    // add some mock goals here
  });

  afterAll(async () => {
    await goalDB.dropGoals();
  });

  test("Delete all goals", async () => {
    await goalDB.dropGoals();
    expect(1).toBe(1);
  });
});
