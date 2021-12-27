import * as React from "react";
import renderer from "react-test-renderer";
import GoalList from "../GoalList";

describe("Test GoalList component", () => {
  it("Should renders GoalList correctly", () => {
    const tree = renderer.create(<GoalList />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
