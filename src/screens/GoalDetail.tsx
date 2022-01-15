/* eslint-disable no-console */
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
import { Button } from "../components/shared";

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
      <View style={styles.buttonAreaWrapper}>
        <View style={styles.buttonWrapper}>
          <Button
            ctaTxt="Add Task"
            pressHandler={() => {
              console.log("Pressed!");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: "20%",
    marginTop: 10,
  },
  recentTasksWrapper: {
    ...Container.centerAligned,
    height: "28%",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
  },
  prioritizedTasksWrapper: {
    ...Container.centerAligned,
    alignItems: "flex-start",
    height: "38%",
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
  },
  buttonAreaWrapper: {
    ...Container.flexStart,
    justifyContent: "flex-end",
    height: "10%",
    marginRight: 30,
  },
  buttonWrapper: {
    width: "50%",
    paddingBottom: 25,
  },
});

export default GoalDetailScreen;
