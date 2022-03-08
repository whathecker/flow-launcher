/* eslint-disable no-console */
import React from "react";
//import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"TasksByPrio">;

const TasksByPrioScreen: React.FC<Props> = ({ route }: Props) => {
  console.log(route.params);
  return (
    <>
      <View>
        <Text>{`Test!`}</Text>
      </View>
    </>
  );
};

export default TasksByPrioScreen;
