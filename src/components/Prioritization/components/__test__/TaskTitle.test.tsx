import * as React from "react";
import renderer from "react-test-renderer";
import TaskTitle from "../TaskTitle";

describe("Test TaskTitle component", () => {
  it("Should renders TaskTitle correctly", () => {
    const tree = renderer.create(<TaskTitle title={`Test title`} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
