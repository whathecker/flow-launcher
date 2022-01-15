import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../Themed";

import { Container, Color, Shadow, Typography } from "../../styles";

const EmptyTasks: React.FC = () => {
  return (
    <View style={styles.emptyTasksMsgWrapper}>
      <Image
        style={styles.emptyTasksImage}
        source={require(`../../../assets/images/partying-face_1f973.png`)}
      />
      <Text style={styles.emptyTasksMsg}>
        {"Small steps, great achievement"}
      </Text>
    </View>
  );
};

const PrioritizedTasks: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerAreaWrapper}>
        <Text style={styles.headerText}>{"Prioritized Tasks"}</Text>
      </View>
      <EmptyTasks />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "85%",
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
    ...Container.centerAlignedVertical,
    height: "55%",
    padding: 20,
  },
  emptyTasksImage: {
    width: 40,
    height: 40,
  },
  emptyTasksMsg: {
    ...Typography.p,
    fontSize: 16,
    color: Color.light.subtleLabel,
    paddingTop: 20,
  },
});

export default PrioritizedTasks;
