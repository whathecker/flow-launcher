import * as React from "react";
import renderer from "react-test-renderer";
import RadioButton from "../RadioButton";

describe("Test RadioButton component", () => {
  it("Should renders inactive RadioButton correctly", () => {
    const tree = renderer
      .create(
        <RadioButton
          value="daily"
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

  it("Should renders active RadioButton correctly", () => {
    const tree = renderer
      .create(
        <RadioButton
          value="seven_days"
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
