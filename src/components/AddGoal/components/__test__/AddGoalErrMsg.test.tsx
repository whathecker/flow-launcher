import * as React from "react";
import renderer from "react-test-renderer";
import AddGoalErrMsg from "../AddGoalErrMsg";

describe("Test AddGoalErrMsg component", () => {
  it("Should renders AddGoalFormLabel correctly", () => {
    const tree = renderer
      .create(<AddGoalErrMsg msg="Error Message" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
