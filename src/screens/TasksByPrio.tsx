/* eslint-disable no-console */
import React from "react";
//import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { TasksByPrioHeader } from "../components/TasksByPrio";
import { GoalStackScreenProps } from "../types/navigation";
import { labelRenderer } from "../utils";

type Props = GoalStackScreenProps<"TasksByPrio">;

const TasksByPrioScreen: React.FC<Props> = ({ route }: Props) => {
  const prio = route.params.prio;
  const backgroundColor = route.params.backgroundColor;
  const tasks = route.params.tasks;

  const headerLabel = labelRenderer.renderPrioBucketLabel(prio);

  return (
    <>
      <View
        style={{
          height: "25%",
          backgroundColor: backgroundColor,
        }}
      >
        <TasksByPrioHeader
          goalTitle="Dummy"
          label={headerLabel}
          backgroundColor={backgroundColor}
        />
      </View>
      <View
        style={{
          height: "75%",
          backgroundColor: backgroundColor,
        }}
      >
        <Text>{`Tasks area: ${tasks.length} tasks to display here`}</Text>
      </View>
    </>
  );
};

export default TasksByPrioScreen;
