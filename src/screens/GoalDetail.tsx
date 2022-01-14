import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { Container } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";

import { GoalDetailHeader, UnprioritizedTasks } from "../components/GoalDetail";

type Props = GoalStackScreenProps<"GoalDetail">;

const GoalDetailScreen: React.FC<Props> = ({ route }: Props) => {
  const { goal } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerWrapper}>
        <GoalDetailHeader title={goal.title} movitation={goal.motivation} />
      </View>
      <View style={styles.recentTasksWrapper}>
        <UnprioritizedTasks />
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
  },
  prioritizedTasksWrapper: {
    ...Container.centerAligned,
    height: "40%",
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
});

export default GoalDetailScreen;
