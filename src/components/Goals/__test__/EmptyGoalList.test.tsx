import * as React from "react";
import renderer from "react-test-renderer";
import EmptyGoalList from "../EmptyGoalList";

describe("Test EmptyGoalList component", () => {
  it("Should renders EmptyGoalList correctly", () => {
    const tree = renderer.create(<EmptyGoalList />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
