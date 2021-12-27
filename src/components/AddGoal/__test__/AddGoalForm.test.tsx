import * as React from "react";
import renderer from "react-test-renderer";
import AddGoalForm from "../AddGoalForm";

describe("Test AddGoalForm component", () => {
  it("Should renders AddGoalForm correctly", () => {
    const tree = renderer.create(<AddGoalForm />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
