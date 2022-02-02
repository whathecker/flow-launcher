import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Goal } from "./components";
import { Goal as GoalEntity } from "../../types/core/entity";
import { View } from "../Themed";

type GoalListProps = {
  goals: GoalEntity[];
};

type GoalItemColor = "#E9695B" | "#84C5E8" | "#1C88BA" | "#F0B541";

function assignColor(index: number): GoalItemColor {
  if (_isFirstColor(index)) return "#E9695B";

  let color;
  switch (_findColorToRender(index)) {
    case 1:
      color = "#84C5E8";
      break;
    case 2:
      color = "#1C88BA";
      break;
    case 3:
      color = "#F0B541";
      break;
    default:
      color = "#E9695B";
      break;
  }

  return color as GoalItemColor;
}

function _isFirstColor(index: number): boolean {
  if (index === 0 || index % 4 === 0) return true;

  return false;
}

function _findColorToRender(index: number): number {
  return index % 4;
}

const GoalList: React.FC<GoalListProps> = ({ goals }: GoalListProps) => {
  const renderGoal: ListRenderItem<GoalEntity> = ({ item, index }) => {
    const backgroundColor = assignColor(index);
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
