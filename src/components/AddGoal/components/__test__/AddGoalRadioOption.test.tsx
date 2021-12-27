import * as React from "react";
import renderer from "react-test-renderer";
import AddGoalRadioOption from "../AddGoalRadioOption";

describe("Test AddGoalRadioOption component", () => {
  it("Should renders inactive AddGoalRadioOption correctly", () => {
    const tree = renderer
      .create(
        <AddGoalRadioOption
          name="daily"
          displayText="Every Day"
          activeValue="three_days"
          pressHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should renders active AddGoalRadioOption correctly", () => {
    const tree = renderer
      .create(
        <AddGoalRadioOption
          name="seven_days"
          displayText="Every Day"
          activeValue="seven_days"
          pressHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
