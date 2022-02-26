import * as React from "react";
import renderer from "react-test-renderer";
import TaskReadable from "../TaskReadable";

describe("Test TaskReadable component", () => {
  it("Should renders TaskReadable correctly", () => {
    const tree = renderer.create(<TaskReadable title="title" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
