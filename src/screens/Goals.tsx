import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Typography } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"Goals">;

const GoalsScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Your Goals</Text>
      </View>
      <View style={styles.goalsAreaWrapper}>
        <Text>Emoji goes here</Text>
      </View>
      <View style={styles.buttonAreaWrapper}>
        <Button
          title="Go to goal detail"
          onPress={() => {
            navigation.navigate("GoalDetail");
          }}
        />
        <Button
          title="Add a Goal"
          onPress={() => {
            navigation.navigate("AddGoal");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.flexStart,
    height: "10%",
    marginTop: 55,
    marginLeft: 40,
  },
  headerText: {
    ...Typography.h1,
  },
  goalsAreaWrapper: {
    ...Container.centerAligned,
    height: "70%",
    borderWidth: 2,
    borderColor: "black",
  },
  buttonAreaWrapper: {
    ...Container.centerAligned,
    height: "10%",
    marginTop: 15,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default GoalsScreen;
