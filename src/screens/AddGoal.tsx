import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { View } from "../components/Themed";
import { AddGoalHeader, AddGoalForm } from "../components/AddGoal";

import { Container } from "../styles";

import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"AddGoal">;

const AddGoalScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerAreaWrapper: {
    ...Container.flexStart,
  },
  formAreaWrapper: {
    ...Container.flexStart,
  },
});

export default AddGoalScreen;
