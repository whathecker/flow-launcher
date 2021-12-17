import * as React from "react";
import renderer from "react-test-renderer";
import AddGoalButton from "../AddGoalButton";

describe("Test AddGoalButton component", () => {
  it("Should renders AddGoalButton correctly", () => {
    const tree = renderer
      .create(
        <AddGoalButton
          submitHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
