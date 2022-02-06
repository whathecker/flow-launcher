import * as React from "react";
import renderer from "react-test-renderer";
import PriorHeader from "../PriorHeader";

describe("Test PriorHeader component", () => {
  it("Should renders PriorHeader correctly", () => {
    const tree = renderer
      .create(<PriorHeader title="Mock goal" motivation="Mock motivation" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
