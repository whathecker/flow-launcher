import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { Container } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";

import {
  GoalDetailHeader,
  UnprioritizedTasks,
  PrioritizedTasks,
} from "../components/GoalDetail";

type Props = GoalStackScreenProps<"GoalDetail">;

const GoalDetailScreen: React.FC<Props> = ({ route }: Props) => {
  const { goal } = route.params;

  return (
    <View>
      <View style={styles.headerWrapper}>
        <GoalDetailHeader title={goal.title} movitation={goal.motivation} />
      </View>
      <View style={styles.recentTasksWrapper}>
        <UnprioritizedTasks />
      </View>
      <View style={styles.prioritizedTasksWrapper}>
        <PrioritizedTasks />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: "25%",
  },
  recentTasksWrapper: {
    ...Container.centerAligned,
    height: "25%",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
  },
  prioritizedTasksWrapper: {
    ...Container.centerAligned,
    alignItems: "flex-start",
    height: "40%",
    marginTop: 20,
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
});

export default GoalDetailScreen;
