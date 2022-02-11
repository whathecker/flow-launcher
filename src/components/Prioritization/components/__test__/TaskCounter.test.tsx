import * as React from "react";
import renderer from "react-test-renderer";
import TaskCounter from "../TaskCounter";

describe("Test TaskCounter component", () => {
  it("Should renders TaskCounter correctly", () => {
    const tree = renderer
      .create(<TaskCounter currentTaskIndex={2} totalTasksLength={5} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
