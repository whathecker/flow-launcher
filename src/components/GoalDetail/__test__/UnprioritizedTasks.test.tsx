import * as React from "react";
import renderer from "react-test-renderer";
import UnprioritizedTasks from "../UnprioritizedTasks";

describe("Test UnprioritizedTasks component", () => {
  it("Should renders UnprioritizedTasks correctly", () => {
    const tree = renderer.create(<UnprioritizedTasks />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
