/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { View } from "../components/Themed";
import { PriorHeader, PriorForm } from "../components/Prioritization";
import { Container, Typography } from "../styles";
import { PriorStackScreenProps } from "../types/navigation";
import { TasksContext } from "../contexts/tasks";
import { taskManager } from "../utils";

type Props = PriorStackScreenProps<"Prioritization">;

const PrioritizationScreen: React.FC<Props> = () => {
  const { state } = useContext(TasksContext);
  const unprioritisedTasks = taskManager.filterUnprioritized(state.tasks);
  return (
    <View style={{ height: "100%" }}>
      <View style={styles.headerWrapper}>
        <PriorHeader title={state.goal!.title} />
      </View>
      <View style={styles.formAreaWrapper}>
        <PriorForm unprioritisedTasks={unprioritisedTasks} />
      </View>
    </View>
  );
};

const screen = Dimensions.get("screen");

function _getHeight(height: number): string {
  if (height < 800) {
    return "75%";
  } else {
    return "65%";
  }
}

function _getPaddingTop(height: number): string {
  if (height < 800) {
    return "2.5%";
  } else {
    return "10%";
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: "25%",
  },
  headerText: {
    ...Typography.h1,
  },
  formAreaWrapper: {
    ...Container.centerAligned,
    height: _getHeight(screen.height),
    paddingTop: _getPaddingTop(screen.height),
    paddingBottom: "8%",
  },
});

export default PrioritizationScreen;
