import * as React from "react";
import renderer from "react-test-renderer";
import PrioReviewBucket from "../PrioReviewBucket";
import { taskManager } from "../../../utils";
import { Task } from "../../../types/core/entity";

describe("Test PrioReviewBucket component", () => {
  const tasks: Task[] = [
    {
      _id: "622605f8766c2b210fcc5890",
      description: "",
      goal_id: "61d024a2b4cda2847a224bdf",
      priority: {
        index: 0,
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
        index: 0,
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
        index: 0,
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
        index: 0,
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
        index: 0,
        importance: "no",
        tier: "low",
        urgency: "no",
      },
      status: "open",
      title: "test5",
    },
  ];

  const result = taskManager.filterByPriorityScheme(tasks);

  it("Should renders PrioReviewBuckets correctly", () => {
    const treeHighest = renderer
      .create(<PrioReviewBucket prio="highest" tasks={result.highest} />)
      .toJSON();

    const treeHigh = renderer
      .create(<PrioReviewBucket prio="high" tasks={result.high} />)
      .toJSON();

    const treeMid = renderer
      .create(<PrioReviewBucket prio="mid" tasks={result.mid} />)
      .toJSON();

    const treeLow = renderer
      .create(<PrioReviewBucket prio="low" tasks={result.low} />)
      .toJSON();

    expect(treeHighest).toMatchSnapshot();
    expect(treeHigh).toMatchSnapshot();
    expect(treeMid).toMatchSnapshot();
    expect(treeLow).toMatchSnapshot();
  });
});
