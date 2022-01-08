import * as React from "react";
import renderer from "react-test-renderer";
import GoalList from "../GoalList";
import { Goal } from "../../../types/core/entity";

describe("Test GoalList component", () => {
  const dummyGoals: Goal[] = [
    {
      _id: "sjdiodfi103jsldicsd",
      title: "dummy goal -1",
      motivation: "this is my motivation",
      status: "open",
      reminder: "daily",
      tasks: [],
    },
    {
      _id: "sjdiodfi103jsldicsd123123",
      title: "dummy goal -2",
      motivation: "this is my motivation",
      status: "open",
      reminder: "daily",
      tasks: [],
    },
    {
      _id: "sjdiodfi103jsldicsdasdasdd123123",
      title: "dummy goal -3",
      motivation: "this is my motivation",
      status: "open",
      reminder: "daily",
      tasks: [],
    },
    {
      _id: "sjdiodfi103jsldicsdasdasdd123121234",
      title: "dummy goal -4",
      motivation: "this is my motivation",
      status: "open",
      reminder: "daily",
      tasks: [],
    },
    {
      _id: "sjdiodfi103jsldicsdasdasdd12312sdfsd",
      title: "dummy goal -5",
      motivation: "this is my motivation",
      status: "open",
      reminder: "daily",
      tasks: [],
    },
  ];

  it("Should renders GoalList correctly", () => {
    const tree = renderer.create(<GoalList goals={dummyGoals} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
