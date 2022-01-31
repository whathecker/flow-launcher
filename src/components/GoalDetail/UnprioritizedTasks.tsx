import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { UnprioritizedTasksList, EmptyUnprioritizedTasks } from "./components";
import { Typography, Color, Shadow } from "../../styles";
import { Task } from "../../types/core/entity";

type UnprioritizedTasksProp = {
  tasks: Task[];
};

const UnprioritizedTasks: React.FC<UnprioritizedTasksProp> = ({
  tasks,
}: UnprioritizedTasksProp) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerAreaWrapper}>
        <Text style={styles.headerText}>{"Recently Added Tasks"}</Text>
      </View>
      {tasks.length > 0 ? (
        <UnprioritizedTasksList tasks={tasks} />
      ) : (
        <EmptyUnprioritizedTasks />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "90%",
    borderWidth: 0.5,
    borderColor: Color.light.defaultBorder,
    borderRadius: 5,
    ...Shadow.regularbackDrop,
    padding: 20,
  },
  headerAreaWrapper: {
    marginBottom: 10,
  },
  headerText: {
    ...Typography.h4,
    fontSize: 18,
  },
});

export default UnprioritizedTasks;
