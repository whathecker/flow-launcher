import * as React from "react";
import renderer from "react-test-renderer";
import AddGoalHeader from "../AddGoalHeader";

describe("Test AddGoalHeader component", () => {
  it("Should renders AddGoalHeader correctly", () => {
    const tree = renderer
      .create(
        <AddGoalHeader
          backBtnHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
