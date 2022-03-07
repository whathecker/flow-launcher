import * as React from "react";
import renderer from "react-test-renderer";
import EmptyPrioritizedTasks from "../EmptyPrioritizedTasks";

describe("Test EmptyPrioritizedTasks component", () => {
  it("Should renders EmptyPrioritizedTasks correctly", () => {
    const tree = renderer.create(<EmptyPrioritizedTasks />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
