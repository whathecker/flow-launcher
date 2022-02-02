import * as React from "react";
import renderer from "react-test-renderer";
import Goal from "../Goal";
import { Goal as GoalEntity } from "../../../../types/core/entity";

describe("Test Goal component", () => {
  const dummyGoal: GoalEntity = {
    _id: "sjdiodfi103jsldicsd",
    title: "dummy goal -1",
    motivation: "this is my motivation",
    status: "open",
    reminder: "daily",
    tasks: [],
  };
  it("Should renders Goal correctly", () => {
    const tree = renderer
      .create(<Goal backgroundColor="#84C5E8" goal={dummyGoal} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
