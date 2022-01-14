import * as React from "react";
import renderer from "react-test-renderer";
import GoalDetailHeader from "../GoalDetailHeader";

describe("Test GoalDetailHeader component", () => {
  it("Should renders GoalDetailHeader correctly", () => {
    const tree = renderer
      .create(
        <GoalDetailHeader
          title="Testing the component"
          movitation="Want to get this right"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
