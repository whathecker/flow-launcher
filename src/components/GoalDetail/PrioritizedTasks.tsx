import React from "react";
import { StyleSheet } from "react-native";
import { EmptyPrioritizedTasks } from "./components";
import { View, Text } from "../Themed";
import { Color, Shadow, Typography } from "../../styles";
import { Task } from "../../types/core/entity";

type PrioritizedTasksProps = {
  highest: Task[];
  high: Task[];
  mid: Task[];
  low: Task[];
};

function _isTasksEmpty(input: Task[]): boolean {
  return input.length === 0;
}

const PrioritizedTasks: React.FC<PrioritizedTasksProps> = ({
  highest,
  high,
  mid,
  low,
}: PrioritizedTasksProps) => {
  const mergedTasks = highest.concat(high).concat(mid).concat(low);
  const isTasksEmptty = _isTasksEmpty(mergedTasks);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerAreaWrapper}>
        <Text style={styles.headerText}>{"Prioritized Tasks"}</Text>
      </View>
      {isTasksEmptty ? (
        <EmptyPrioritizedTasks />
      ) : (
        <Text>{`Display buckets here`}</Text>
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

export default PrioritizedTasks;
