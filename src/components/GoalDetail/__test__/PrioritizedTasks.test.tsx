import * as React from "react";
import renderer from "react-test-renderer";
import PrioritizedTasks from "../PrioritizedTasks";

describe("Test PrioritizedTasks component", () => {
  it("Should renders PrioritizedTasks correctly", () => {
    const tree = renderer.create(<PrioritizedTasks />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
