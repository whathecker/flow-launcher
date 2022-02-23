import * as React from "react";
import renderer from "react-test-renderer";
import GoBackButton from "../GoBackButton";

describe("Test GoBackButton component", () => {
  it("Should renders GoBackButton correctly", () => {
    const tree = renderer
      .create(
        <GoBackButton
          pressHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
