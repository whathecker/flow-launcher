import * as React from "react";
import renderer from "react-test-renderer";
import AddGoalFormLabel from "../AddGoalFormLabel";

describe("Test AddGoalFormLabel component", () => {
  it("Should renders AddGoalFormLabel correctly", () => {
    const tree = renderer
      .create(<AddGoalFormLabel text="Motivation" type="motivation" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
