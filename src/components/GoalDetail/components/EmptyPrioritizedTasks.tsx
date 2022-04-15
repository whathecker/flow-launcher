import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Color, Typography } from "../../../styles";

const EmptyPrioritizedTasks: React.FC = () => {
  return (
    <View style={styles.emptyTasksMsgWrapper}>
      <Image
        style={styles.emptyTasksImage}
        source={require(`../../../../assets/images/partying-face_1f973.png`)}
      />
      <Text style={styles.emptyTasksMsg}>
        {"Small steps, great achievement"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyTasksMsgWrapper: {
    ...Container.centerAlignedVertical,
    height: 280,
    padding: 20,
  },
  emptyTasksImage: {
    width: 40,
    height: 40,
  },
  emptyTasksMsg: {
    ...Typography.p,
    fontSize: 14,
    color: Color.light.subtleLabel,
    paddingTop: 20,
  },
});

export default EmptyPrioritizedTasks;
