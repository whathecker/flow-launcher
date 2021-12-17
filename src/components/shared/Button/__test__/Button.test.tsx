import * as React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

describe("Test Button component", () => {
  it("Should renders Button correctly", () => {
    const tree = renderer
      .create(
        <Button
          ctaTxt="Click it!"
          pressHandler={() => {
            return;
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
