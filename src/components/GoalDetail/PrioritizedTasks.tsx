import React from "react";
import { StyleSheet } from "react-native";
import { EmptyPrioritizedTasks, TaskBucketByPrio } from "./components";
import { View, Text } from "../Themed";
import { Color, Shadow, Typography } from "../../styles";
import { Task, GoalColor } from "../../types/core/entity";

type PrioritizedTasksProps = {
  highest: Task[];
  high: Task[];
  mid: Task[];
  low: Task[];
  goalColor: GoalColor;
};

function _isTasksEmpty(input: Task[]): boolean {
  return input.length === 0;
}

const PrioritizedTasks: React.FC<PrioritizedTasksProps> = ({
  highest,
  high,
  mid,
  low,
  goalColor,
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
        <View>
          <TaskBucketByPrio
            prio={"highest"}
            tasks={highest}
            goalColor={goalColor}
          />
          <TaskBucketByPrio prio={"high"} tasks={high} goalColor={goalColor} />
          <TaskBucketByPrio prio={"mid"} tasks={mid} goalColor={goalColor} />
          <TaskBucketByPrio prio={"low"} tasks={low} goalColor={goalColor} />
        </View>
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
