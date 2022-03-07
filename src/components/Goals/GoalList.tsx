import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Goal } from "./components";
import { Goal as GoalEntity } from "../../types/core/entity";
import { View } from "../Themed";
import { colorRenderer } from "../../utils";

type GoalListProps = {
  goals: GoalEntity[];
};

const GoalList: React.FC<GoalListProps> = ({ goals }: GoalListProps) => {
  const renderGoal: ListRenderItem<GoalEntity> = ({ item, index }) => {
    const backgroundColor = colorRenderer.assignColorForGoal(index);
    return <Goal goal={item} backgroundColor={backgroundColor} />;
  };

  return (
    <View
      style={{
        width: "85%",
      }}
    >
      <FlatList
        data={goals}
        renderItem={renderGoal}
        keyExtractor={(item) => item._id as string}
      />
    </View>
  );
};

export default GoalList;
