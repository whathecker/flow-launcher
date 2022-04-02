import taskManager from "../taskManager";
import { Task } from "../../types/core/entity";

describe("Test task filters", () => {
  const tasks: Task[] = [
    {
      _id: "61ed56d3f38a35aa47ca0e70",
      description: "Mid prior task",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "no",
        tier: "n/a",
        urgency: "yes",
      },
      status: "open",
      title: "Mid prior task",
    },
    {
      _id: "61ed56d3f38a35aa47ca0e71",
      description: "Highest prior task",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "yes",
        tier: "n/a",
        urgency: "yes",
      },
      status: "open",
      title: "Highest prior task",
    },
    {
      _id: "61ed56d3f38a35aa47ca0e73",
      description: "High prior task",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "yes",
        tier: "n/a",
        urgency: "no",
      },
      status: "open",
      title: "High prior task",
    },
    {
      _id: "61ed56d3f38a35aa47ca0e79",
      description: "Low prior task",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "no",
        tier: "n/a",
        urgency: "no",
      },
      status: "open",
      title: "Low prior task",
    },
    {
      _id: "61ed56d3f38a35aa47ca0e80",
      description: "Low prior task",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "no",
        tier: "n/a",
        urgency: "no",
      },
      status: "open",
      title: "Low prior task - 2",
    },
    {
      _id: "61ed56d3f38a35aa47ca0e83",
      description: "Unprioritised task -1",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "n/a",
        tier: "n/a",
        urgency: "n/a",
      },
      status: "open",
      title: "Unprioritised task -1",
    },
    {
      _id: "61ed56d3f38a35aa47ca0e85",
      description: "Unprioritised task -2",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "n/a",
        tier: "n/a",
        urgency: "n/a",
      },
      status: "open",
      title: "Unprioritised task -2",
    },
    {
      _id: "61ed56d3f38a35aa47ca0e88",
      description: "Unprioritised task - 3",
      goal_id: "61ed56a8f38a35aa47ca0e6f",
      priority: {
        index: 0,
        importance: "n/a",
        tier: "n/a",
        urgency: "n/a",
      },
      status: "open",
      title: "Unprioritised task - 3",
    },
  ];
  it("Should filter tasks correctly by prior", () => {
    const tasksByPriorBucket = taskManager.filterByPriorityScheme(tasks);

    expect(tasksByPriorBucket.highest).toHaveLength(1);
    expect(tasksByPriorBucket.high).toHaveLength(1);
    expect(tasksByPriorBucket.mid).toHaveLength(1);
    expect(tasksByPriorBucket.low).toHaveLength(2);

    expect(tasksByPriorBucket.highest[0].title).toBe(tasks[1].title);
  });

  it("Should filter unprioritised tasks correctly", () => {
    const unprioritised = taskManager.filterUnprioritized(tasks);

    expect(unprioritised).toHaveLength(3);
  });

  it("Should not be allowed to submit for Prior Review", () => {
    const result = taskManager.checkTasksReadinessForPriorReview(tasks);

    expect(result).toBe(false);
  });

  it("Should be allowed to submit for Prior Review", () => {
    const tasks: Task[] = [
      {
        _id: "61ed56d3f38a35aa47ca0e70",
        description: "Mid prior task",
        goal_id: "61ed56a8f38a35aa47ca0e6f",
        priority: {
          index: 0,
          importance: "no",
          tier: "n/a",
          urgency: "yes",
        },
        status: "open",
        title: "Mid prior task",
      },
      {
        _id: "61ed56d3f38a35aa47ca0e71",
        description: "Highest prior task",
        goal_id: "61ed56a8f38a35aa47ca0e6f",
        priority: {
          index: 0,
          importance: "yes",
          tier: "n/a",
          urgency: "yes",
        },
        status: "open",
        title: "Highest prior task",
      },
      {
        _id: "61ed56d3f38a35aa47ca0e73",
        description: "High prior task",
        goal_id: "61ed56a8f38a35aa47ca0e6f",
        priority: {
          index: 0,
          importance: "yes",
          tier: "n/a",
          urgency: "no",
        },
        status: "open",
        title: "High prior task",
      },
    ];

    const result = taskManager.checkTasksReadinessForPriorReview(tasks);

    expect(result).toBe(true);
  });
});
