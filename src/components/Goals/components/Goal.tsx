import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography } from "../../../styles";

type GoalProps = {
  title: string;
  motivation: string;
};

const Goal: React.FC<GoalProps> = ({ title, motivation }: GoalProps) => {
  return (
    <View style={styles.goalWrapper}>
      <Text style={styles.goalTitleText}>{title}</Text>
      <Text style={styles.goalMotiviationText}>{motivation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalWrapper: {
    ...Container.centerAlignedVertical,
    alignItems: "flex-start",
    width: "95%",
    height: 150,
    paddingLeft: 40,
    paddingRight: 80,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "2.5%",
    marginRight: "2.5%",
    borderColor: "black",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 5,
  },
  goalTitleText: {
    ...Typography.h4,
    textAlign: "left",
    paddingBottom: 20,
  },
  goalMotiviationText: {
    ...Typography.p,
  },
});

export default Goal;
