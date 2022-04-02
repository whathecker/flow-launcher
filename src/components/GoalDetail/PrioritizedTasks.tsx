import React, { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";
import { StyleSheet } from "react-native";
import { EmptyPrioritizedTasks, TaskBucketByPrio } from "./components";
import { View, Text } from "../Themed";
import { Color, Shadow, Typography } from "../../styles";
import { GoalColor } from "../../types/core/entity";

type PrioritizedTasksProps = { goalColor: GoalColor };

function _isTasksEmpty(totalTasksLength: number): boolean {
  return totalTasksLength === 0;
}

const PrioritizedTasks: React.FC<PrioritizedTasksProps> = ({
  goalColor,
}: PrioritizedTasksProps) => {
  const { state } = useContext(TasksContext);

  const totalTasksLength =
    state.highestPrioTasks.length +
    state.highPrioTasks.length +
    state.midPrioTasks.length +
    state.midPrioTasks.length;

  const isTasksEmptty = _isTasksEmpty(totalTasksLength);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerAreaWrapper}>
        <Text style={styles.headerText}>{"Prioritized Tasks"}</Text>
      </View>
      {isTasksEmptty ? (
        <EmptyPrioritizedTasks />
      ) : (
        <View style={{ paddingTop: 15 }}>
          <TaskBucketByPrio
            prio={"highest"}
            tasks={state.highestPrioTasks}
            goalColor={goalColor}
          />
          <TaskBucketByPrio
            prio={"high"}
            tasks={state.highPrioTasks}
            goalColor={goalColor}
          />
          <TaskBucketByPrio
            prio={"mid"}
            tasks={state.midPrioTasks}
            goalColor={goalColor}
          />
          <TaskBucketByPrio
            prio={"low"}
            tasks={state.lowPrioTasks}
            goalColor={goalColor}
          />
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
    ...Typography.p,
    fontSize: 16,
  },
});

export default PrioritizedTasks;
