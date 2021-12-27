import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Goal } from "./components";

type DummyGoalModel = {
  _id: string;
  title: string;
  motivation: string;
};

const GoalList: React.FC = () => {
  const dummyGoals: DummyGoalModel[] = [
    {
      _id: "sjdiodfi103jsldicsd",
      title: "dummy goal -1",
      motivation: "this is my motivation",
    },
    {
      _id: "sjdiodfi103jsldicsd123123",
      title: "dummy goal -2",
      motivation: "this is my motivation",
    },
    {
      _id: "sjdiodfi103jsldicsdasdasdd123123",
      title: "dummy goal -3",
      motivation: "this is my motivation",
    },
  ];

  const renderGoal: ListRenderItem<DummyGoalModel> = ({ item }) => {
    return <Goal title={item.title} motivation={item.motivation} />;
  };

  return (
    <FlatList
      data={dummyGoals}
      renderItem={renderGoal}
      keyExtractor={(item) => item._id}
    />
  );
};

export default GoalList;
