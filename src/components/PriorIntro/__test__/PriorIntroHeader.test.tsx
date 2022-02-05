import * as React from "react";
import renderer from "react-test-renderer";
import PriorIntroHeader from "../PriorIntroHeader";

describe("Test PriorIntroHeader component", () => {
  it("Should renders PriorIntroHeader correctly", () => {
    const tree = renderer.create(<PriorIntroHeader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
