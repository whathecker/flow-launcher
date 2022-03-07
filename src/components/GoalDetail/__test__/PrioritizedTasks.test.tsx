import * as React from "react";
import renderer from "react-test-renderer";
import PrioritizedTasks from "../PrioritizedTasks";
import { Task } from "../../../types/core/entity";
import { taskFilters } from "../../../utils";

describe("Test PrioritizedTasks component", () => {
  it("Should renders PrioritizedTasks correctly", () => {
    const tasks: Task[] = [
      {
        _id: "622605f8766c2b210fcc5890",
        description: "",
        goal_id: "61d024a2b4cda2847a224bdf",
        priority: {
          importance: "yes",
          tier: "highest",
          urgency: "yes",
        },
        status: "open",
        title: "Test1",
      },
      {
        _id: "622605fd766c2b210fcc5891",
        description: "",
        goal_id: "61d024a2b4cda2847a224bdf",
        priority: {
          importance: "yes",
          tier: "highest",
          urgency: "yes",
        },
        status: "open",
        title: "Test2",
      },
      {
        _id: "62260602766c2b210fcc5892",
        description: "",
        goal_id: "61d024a2b4cda2847a224bdf",
        priority: {
          importance: "yes",
          tier: "high",
          urgency: "no",
        },
        status: "open",
        title: "test3",
      },
      {
        _id: "62260606766c2b210fcc5893",
        description: "",
        goal_id: "61d024a2b4cda2847a224bdf",
        priority: {
          importance: "yes",
          tier: "high",
          urgency: "no",
        },
        status: "open",
        title: "Test4",
      },
      {
        _id: "62260609766c2b210fcc5894",
        description: "",
        goal_id: "61d024a2b4cda2847a224bdf",
        priority: {
          importance: "no",
          tier: "low",
          urgency: "no",
        },
        status: "open",
        title: "test5",
      },
    ];
    const result = taskFilters.filterByPriorityScheme(tasks);
    const tree = renderer
      .create(
        <PrioritizedTasks
          highest={result.highest}
          high={result.high}
          mid={result.mid}
          low={result.low}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
