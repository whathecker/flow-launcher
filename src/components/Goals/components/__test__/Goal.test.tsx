import * as React from "react";
import renderer from "react-test-renderer";
import Goal from "../Goal";

describe("Test Goal component", () => {
  it("Should renders Goal correctly", () => {
    const tree = renderer
      .create(
        <Goal
          backgroundColor="#84C5E8"
          title="test goal"
          motivation="test it!"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
