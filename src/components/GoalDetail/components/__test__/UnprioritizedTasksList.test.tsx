import * as React from "react";
import renderer from "react-test-renderer";
import UnprioritizedTasksList from "../UnprioritizedTasksList";
import { Task } from "../../../../types/core/entity";

describe("Test UnprioritizedTasksList component", () => {
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

  it("Should renders UnprioritizedTasksList correctly", () => {
    const tree = renderer
      .create(<UnprioritizedTasksList tasks={dummayTasks} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
