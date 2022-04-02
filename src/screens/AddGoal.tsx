import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { AddGoalHeader, AddGoalForm } from "../components/AddGoal";

import { Container } from "../styles";

import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"AddGoal">;

const AddGoalScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View>
      <View style={styles.headerAreaWrapper}>
        <AddGoalHeader
          backBtnHandler={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.formAreaWrapper}>
        <AddGoalForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerAreaWrapper: {
    ...Container.flexStart,
    height: "15%",
  },
  formAreaWrapper: {
    ...Container.flexStart,
    height: "85%",
  },
});

export default AddGoalScreen;
