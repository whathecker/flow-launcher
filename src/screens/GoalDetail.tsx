import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Typography } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"GoalDetail">;

const GoalDetailScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go back (later to be replaced by icon in the header"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Here your title of the goal</Text>
      </View>
      <View style={styles.bodyTextWrapper}>
        <Text style={styles.bodyText}>Motivation of the goal goes here</Text>
      </View>
      <View style={styles.recentTasksWrapper}>
        <Text>Recently added tasks</Text>
      </View>
      <View style={styles.prioritizedTasksWrapper}>
        <Text>Prioritized Task Area</Text>
        <Button
          title="Start Pritorize"
          onPress={() => {
            navigation.navigate("Prior");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.centerAligned,
    height: "10%",
  },
  headerText: {
    ...Typography.h1,
  },
  bodyTextWrapper: {
    ...Container.centerAligned,
    height: "2%",
  },
  bodyText: {
    ...Typography.p,
  },
  recentTasksWrapper: {
    ...Container.centerAligned,
    height: "25%",
  },
  prioritizedTasksWrapper: {
    ...Container.centerAligned,
    height: "40%",
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
});

export default GoalDetailScreen;
