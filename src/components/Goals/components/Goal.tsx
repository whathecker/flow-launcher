import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography, Shadow } from "../../../styles";

type GoalProps = {
  title: string;
  motivation: string;
  backgroundColor: string;
};

const Goal: React.FC<GoalProps> = ({
  title,
  motivation,
  backgroundColor,
}: GoalProps) => {
  return (
    <View
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      style={styles.goalWrapper}
    >
      <Text lightColor="white" darkColor="white" style={styles.goalTitleText}>
        {title}
      </Text>
      <Text
        lightColor="white"
        darkColor="white"
        style={styles.goalMotiviationText}
      >
        {motivation}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalWrapper: {
    ...Container.centerAlignedVertical,
    alignItems: "flex-start",
    width: "90%",
    height: 160,
    paddingLeft: 40,
    paddingRight: 60,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 10,
    ...Shadow.regularbackDrop,
  },
  goalTitleText: {
    ...Typography.h4,
    fontSize: 22,
    textAlign: "left",
    paddingBottom: 20,
  },
  goalMotiviationText: {
    ...Typography.p,
    fontSize: 18,
  },
});

export default Goal;
