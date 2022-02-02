import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography, Color } from "../../../styles";

const EmptyUnprioritizedTasks: React.FC = () => {
  return (
    <View style={styles.emptyTasksMsgWrapper}>
      <Text style={styles.emptyTasksMsg}>{"Nothing there yet"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default EmptyUnprioritizedTasks;
