import * as React from "react";
import renderer from "react-test-renderer";
import TasksByPrioHeader from "../TasksByPrioHeader";

describe("Test TasksByPrioHeader component", () => {
  it("Should renders TasksByPrioHeader correctly", () => {
    const treeHighest = renderer
      .create(
        <TasksByPrioHeader
          prio="highest"
          goalTitle="Mock goal"
          label={"dummy label"}
          backgroundColor="#BCA136"
        />,
      )
      .toJSON();

    const treeHigh = renderer
      .create(
        <TasksByPrioHeader
          prio="high"
          goalTitle="Mock goal"
          label={"dummy label"}
          backgroundColor="#BCA136"
        />,
      )
      .toJSON();

    const treeMid = renderer
      .create(
        <TasksByPrioHeader
          prio="mid"
          goalTitle="Mock goal"
          label={"dummy label"}
          backgroundColor="#BCA136"
        />,
      )
      .toJSON();

    const treeLow = renderer
      .create(
        <TasksByPrioHeader
          prio="low"
          goalTitle="Mock goal"
          label={"dummy label"}
          backgroundColor="#BCA136"
        />,
      )
      .toJSON();

    expect(treeHighest).toMatchSnapshot();
    expect(treeHigh).toMatchSnapshot();
    expect(treeMid).toMatchSnapshot();
    expect(treeLow).toMatchSnapshot();
  });
});
