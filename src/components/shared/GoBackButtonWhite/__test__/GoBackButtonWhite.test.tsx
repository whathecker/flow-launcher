import * as React from "react";
import renderer from "react-test-renderer";
import GoBackButtonWhite from "../GoBackButtonWhite";

describe("Test GoBackButtonWhite component", () => {
  it("Should renders GoBackButtonWhite correctly", () => {
    const tree = renderer
      .create(
        <GoBackButtonWhite
          pressHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
