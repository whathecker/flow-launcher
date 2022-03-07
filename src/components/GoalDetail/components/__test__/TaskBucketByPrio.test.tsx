import * as React from "react";
import renderer from "react-test-renderer";
import TaskBucketByPrio from "../TaskBucketByPrio";
import { Task } from "../../../../types/core/entity";
import { taskFilters } from "../../../../utils";

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

describe("Test TaskBucketByPrio component", () => {
  it("Should renders TaskBucketByPrio correctly", () => {
    const tree = renderer
      .create(
        <TaskBucketByPrio
          prio={"low"}
          tasks={result.low}
          goalColor={"#F0B541"}
        />,
      )
      .toJSON();
    const tree2 = renderer
      .create(
        <TaskBucketByPrio
          prio={"mid"}
          tasks={result.mid}
          goalColor={"#F0B541"}
        />,
      )
      .toJSON();
    const tree3 = renderer
      .create(
        <TaskBucketByPrio
          prio={"high"}
          tasks={result.high}
          goalColor={"#F0B541"}
        />,
      )
      .toJSON();
    const tree4 = renderer
      .create(
        <TaskBucketByPrio
          prio={"highest"}
          tasks={result.highest}
          goalColor={"#F0B541"}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree2).toMatchSnapshot();
    expect(tree3).toMatchSnapshot();
    expect(tree4).toMatchSnapshot();
  });
});
