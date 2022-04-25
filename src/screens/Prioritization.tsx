/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
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
    <>
      <View style={styles.headerWrapper}>
        <PriorHeader title={state.goal!.title} />
      </View>
      <View style={styles.formAreaWrapper}>
        <PriorForm unprioritisedTasks={unprioritisedTasks} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: "22%",
  },
  headerText: {
    ...Typography.h1,
  },
  formAreaWrapper: {
    ...Container.centerAligned,
    height: "78%",
    paddingBottom: "5%",
  },
});

export default PrioritizationScreen;
