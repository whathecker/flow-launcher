import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../components/Themed";
import { AddGoalHeader, AddGoalButton } from "../components/AddGoal";

import { Container } from "../styles";

import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"AddGoal">;

const AddGoalScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerAreaWrapper}>
        <AddGoalHeader
          backBtnHandler={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.formAreaWrapper}>
        <Text>Form area</Text>
      </View>
      <View style={styles.buttonAreaWrapper}>
        <AddGoalButton
          submitHandler={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerAreaWrapper: {
    ...Container.flexStart,
    height: "13%",
  },
  formAreaWrapper: {
    ...Container.centerAligned,
    height: "67%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  inputWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
  buttonAreaWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
});

export default AddGoalScreen;
