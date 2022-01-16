/* eslint-disable no-console */
import React, { useState } from "react";
import { StyleSheet, Keyboard } from "react-native";
import { View, TouchableWithoutFeedback } from "../components/Themed";
import { Container, Color, Shadow } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";

import {
  GoalDetailHeader,
  UnprioritizedTasks,
  PrioritizedTasks,
  AddTaskForm,
} from "../components/GoalDetail";
import { Button } from "../components/shared";

type Props = GoalStackScreenProps<"GoalDetail">;

const GoalDetailScreen: React.FC<Props> = ({ route }: Props) => {
  const { goal } = route.params;
  const [addTaskFormOpened, setAddTaskFormOpened] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setAddTaskFormOpened(false);
        Keyboard.dismiss();
      }}
    >
      <View>
        <View style={styles.headerWrapper}>
          <GoalDetailHeader title={goal.title} movitation={goal.motivation} />
        </View>
        <View style={styles.recentTasksWrapper}>
          <UnprioritizedTasks />
        </View>
        <View style={styles.prioritizedTasksWrapper}>
          <PrioritizedTasks />
        </View>
        <View style={styles.buttonAreaWrapper}>
          <View style={styles.buttonWrapper}>
            <Button
              ctaTxt="Add Task"
              pressHandler={() => {
                setAddTaskFormOpened(true);
              }}
            />
          </View>
        </View>
        {addTaskFormOpened === true ? (
          <View style={styles.addTaskFormWrapper}>
            <AddTaskForm />
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: "20%",
    marginTop: 10,
  },
  recentTasksWrapper: {
    ...Container.centerAligned,
    height: "28%",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
  },
  prioritizedTasksWrapper: {
    ...Container.centerAligned,
    alignItems: "flex-start",
    height: "38%",
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
  },
  buttonAreaWrapper: {
    ...Container.flexStart,
    justifyContent: "flex-end",
    height: "10%",
    marginRight: 30,
  },
  buttonWrapper: {
    width: "50%",
    paddingBottom: 25,
  },
  addTaskFormWrapper: {
    position: "absolute",
    zIndex: 100,
    marginTop: "63%",
    marginLeft: "0.5%",
    marginRight: "0.5%",
    width: "99%",
    height: "37.5%",
    borderWidth: 2,
    borderColor: Color.light.defaultBorder,
    borderRadius: 5,
    ...Shadow.regularbackDrop,
  },
});

export default GoalDetailScreen;
