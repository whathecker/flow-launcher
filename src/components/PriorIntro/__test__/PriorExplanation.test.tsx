import * as React from "react";
import renderer from "react-test-renderer";
import PriorExplanation from "../PriorExplanation";

describe("Test PriorExplanation component", () => {
  it("Should renders PriorExplanation correctly", () => {
    const tree = renderer.create(<PriorExplanation />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
