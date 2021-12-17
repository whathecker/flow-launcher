import * as React from "react";
import renderer from "react-test-renderer";
import CloseIcon from "../CloseIcon";

describe("Test CloseIcon component", () => {
  it("Should renders CloseIcon correctly", () => {
    const tree = renderer
      .create(
        <CloseIcon
          pressHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
