import * as React from "react";
import renderer from "react-test-renderer";
import PriorReviewHeader from "../PriorReviewHeader";

describe("Test PriorReviewHeader component", () => {
  it("Should renders PriorReviewHeader correctly", () => {
    const tree = renderer
      .create(<PriorReviewHeader title="Mock goal" tasksCount={6} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
