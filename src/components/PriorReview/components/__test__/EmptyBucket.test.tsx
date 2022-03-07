import * as React from "react";
import renderer from "react-test-renderer";
import EmptyBucket from "../EmptyBucket";

describe("Test EmptyBucket component", () => {
  it("Should renders EmptyBucket correctly", () => {
    const tree = renderer
      .create(<EmptyBucket title="This should be title of empty prio bucket" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
