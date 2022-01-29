import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography } from "../../../styles";

type UnprioritizedTaskProps = {
  title: string;
};

const UnprioritizedTask: React.FC<UnprioritizedTaskProps> = ({
  title,
}: UnprioritizedTaskProps) => {
  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    ...Container.centerAligned,
  },
  text: {
    ...Typography.p,
  },
});

export default UnprioritizedTask;
