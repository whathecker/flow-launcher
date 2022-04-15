/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { EmptyGoalList, GoalList } from "../components/Goals";
import { Button } from "../components/shared";
import { Container, Typography, Color } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";
import { GoalsContext } from "../contexts/goals";

type Props = GoalStackScreenProps<"Goals">;

const GoalsScreen: React.FC<Props> = ({ navigation }: Props) => {
  const { state, fetchGoals } = useContext(GoalsContext);

  const isGoalListEmpty =
    !state.goals || state.goals.length === 0 ? true : false;

  useEffect(() => {
    fetchGoals();
  }, [state.goals?.length]);

  const lightHeaderText = Color.light.textOnBackgroundForRead;
  const darkHeaderText = Color.dark.textOnBackgroundForRead;

  return (
    <>
      <View style={styles.headerWrapper}>
        <Text
          style={styles.headerText}
          lightColor={lightHeaderText}
          darkColor={darkHeaderText}
        >
          {`Your Goals`}
        </Text>
      </View>
      {isGoalListEmpty ? (
        <View style={styles.emptyGoalsWrapper}>
          <EmptyGoalList />
        </View>
      ) : (
        <View style={styles.goalsAreaWrapper}>
          <GoalList goals={state.goals!} />
        </View>
      )}
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
  emptyGoalsWrapper: {
    ...Container.centerAlignedVertical,
    justifyContent: "center",
    width: "100%",
    height: "70%",
  },
  goalsAreaWrapper: {
    ...Container.centerAlignedVertical,
    justifyContent: "flex-start",
    width: "100%",
    height: "70%",
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
