import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { AddGoalHeader, AddGoalForm } from "../components/AddGoal";

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
        <AddGoalForm
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
    ...Container.flexStart,
    height: "87%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default AddGoalScreen;
