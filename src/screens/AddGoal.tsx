import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Typography } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"AddGoal">;

const AddGoalScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>New Goal</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Title Input goes here</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Motivation input goes here</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Reminder input goes here</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go back (later to be add button)"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.flexStart,
    height: "20%",
  },
  inputWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
  headerText: {
    ...Typography.h1,
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
});

export default AddGoalScreen;
