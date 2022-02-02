import React from "react";
import { StyleSheet } from "react-native";
import { Touchable, Text } from "../../Themed";
import { Container, Typography, Shadow } from "../../../styles";
import { Goal as GoalEntity } from "../../../types/core/entity";
import { navigationRef } from "../../../utils";

type GoalProps = {
  goal: GoalEntity;
  backgroundColor: string;
};

const Goal: React.FC<GoalProps> = ({ goal, backgroundColor }: GoalProps) => {
  return (
    <Touchable
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      style={styles.goalWrapper}
      onPress={() => {
        navigationRef.navigate("GoalDetail", { goal });
      }}
    >
      <Text lightColor="white" darkColor="white" style={styles.goalTitleText}>
        {goal.title}
      </Text>
      <Text
        lightColor="white"
        darkColor="white"
        style={styles.goalMotiviationText}
      >
        {goal.motivation}
      </Text>
    </Touchable>
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
