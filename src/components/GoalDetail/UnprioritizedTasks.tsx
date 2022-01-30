import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { Container, Typography, Color, Shadow } from "../../styles";

const EmptyTasks: React.FC = () => {
  return (
    <View style={styles.emptyTasksMsgWrapper}>
      <Text style={styles.emptyTasksMsg}>{"Nothing there yet"}</Text>
    </View>
  );
};

//TODO: receive data as props
//Render empty tasks if there is no data
//Render list if there is data

const UnprioritizedTasks: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerAreaWrapper}>
        <Text style={styles.headerText}>{"Recently Added Tasks"}</Text>
      </View>
      <EmptyTasks />
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
  emptyTasksMsgWrapper: {
    ...Container.centerAligned,
    height: "55%",
    padding: 20,
  },
  emptyTasksMsg: {
    ...Typography.p,
    fontSize: 16,
    color: Color.light.subtleLabel,
  },
});

export default UnprioritizedTasks;
