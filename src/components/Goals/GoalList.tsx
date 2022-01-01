import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Goal } from "./components";
import { Goal as GoalEntity } from "../../types/core/entity";

type GoalListProps = {
  goals: GoalEntity[];
};

const GoalList: React.FC<GoalListProps> = ({ goals }: GoalListProps) => {
  const renderGoal: ListRenderItem<GoalEntity> = ({ item }) => {
    return <Goal title={item.title} motivation={item.motivation} />;
  };

  return (
    <FlatList
      data={goals}
      renderItem={renderGoal}
      keyExtractor={(item) => item._id as string}
    />
  );
};

export default GoalList;
