import * as React from "react";
import renderer from "react-test-renderer";
import UnprioritizedTasks from "../UnprioritizedTasks";
import { Task } from "../../../types/core/entity";

describe("Test UnprioritizedTasks component", () => {
  const dummayTasks: Task[] = [
    {
      _id: "sjdiodfi103jsldicsd",
      goal_id: "asjdklasf0qwdakddasd",
      title: "test tasks",
      status: "open",
    },
    {
      _id: "sjdiodfi103jsldicsdsd",
      goal_id: "asjdklasf0qwdakddasd",
      title: "test tasks -1",
      status: "open",
    },
    {
      _id: "sjdiodfi103jsldicsdasdadgd",
      goal_id: "asjdklasf0qwdakddasd",
      title: "test tasks -2",
      status: "open",
    },
    {
      _id: "sjdiodfi103jsldicsdadasdasfwefewvfwe",
      goal_id: "asjdklasf0qwdakddasd",
      title: "test tasks-3",
      status: "open",
    },
  ];

  it("Should renders UnprioritizedTasks correctly", () => {
    const tree = renderer
      .create(<UnprioritizedTasks tasks={dummayTasks} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
