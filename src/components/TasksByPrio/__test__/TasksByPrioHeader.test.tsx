import * as React from "react";
import renderer from "react-test-renderer";
import TasksByPrioHeader from "../TasksByPrioHeader";

describe("Test TasksByPrioHeader component", () => {
  it("Should renders TasksByPrioHeader correctly", () => {
    const tree = renderer
      .create(
        <TasksByPrioHeader
          goalTitle="Mock goal"
          label={"dummy label"}
          backgroundColor="#BCA136"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
