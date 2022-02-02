import * as React from "react";
import renderer from "react-test-renderer";
import UnprioritizedTask from "../UnprioritizedTask";

describe("Test UnprioritizedTask component", () => {
  it("Should renders UnprioritizedTask correctly", () => {
    const tree = renderer.create(<UnprioritizedTask title="title" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
