import * as React from "react";
import renderer from "react-test-renderer";
import EmptyUnprioritizedTasks from "../EmptyUnprioritizedTasks";

describe("Test EmptyUnprioritizedTasks component", () => {
  it("Should renders EmptyUnprioritizedTasks correctly", () => {
    const tree = renderer.create(<EmptyUnprioritizedTasks />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
