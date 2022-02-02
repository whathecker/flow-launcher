import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography, Color } from "../../../styles";

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
    width: "100%",
    borderColor: Color.light.defaultBorder,
    borderRadius: 5,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    ...Typography.p,
  },
});

export default UnprioritizedTask;
