import React, { useContext } from "react";
import { TasksContext } from "../../contexts/tasks";
import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { UnprioritizedTasksList, EmptyUnprioritizedTasks } from "./components";
import { Typography, Color, Shadow } from "../../styles";

const UnprioritizedTasks: React.FC = () => {
  const { state } = useContext(TasksContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerAreaWrapper}>
        <Text style={styles.headerText}>{"Recently Added Tasks"}</Text>
      </View>
      {state.unprioTasks.length > 0 ? (
        <UnprioritizedTasksList tasks={state.unprioTasks} />
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
    ...Typography.p,
    fontSize: 16,
  },
});

export default UnprioritizedTasks;
