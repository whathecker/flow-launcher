import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../components/Themed";
import { EmptyGoalList } from "../components/Goals";
import { Button } from "../components/shared";

import { Container, Typography } from "../styles";

import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"Goals">;

const GoalsScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <Text
          style={styles.headerText}
          lightColor="#554F4F"
          darkColor="#554F4F"
        >
          {`Your Goals`}
        </Text>
      </View>
      <View style={styles.goalsAreaWrapper}>
        <EmptyGoalList />
      </View>
      <View style={styles.buttonAreaWrapper}>
        <View style={styles.buttonWrapper}>
          <Button
            pressHandler={() => {
              navigation.navigate("AddGoal");
            }}
            ctaTxt="Add a new goal"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.flexStart,
    height: "15%",
    paddingTop: 60,
    paddingLeft: 50,
    paddingBottom: 15,
  },
  headerText: {
    ...Typography.h1,
  },
  goalsAreaWrapper: {
    ...Container.centerAlignedVertical,
    height: "70%",
  },
  goalAreaBodyWrapper: {
    paddingTop: 5,
    paddingBottom: 18,
  },
  bodyImage: {
    width: 95,
    height: 95,
  },
  bodyText: {
    ...Typography.p,
    textAlign: "center",
  },
  buttonAreaWrapper: {
    ...Container.centerAligned,
    height: "15%",
    paddingTop: 5,
  },
  buttonWrapper: {
    width: "90%",
  },
});

export default GoalsScreen;
