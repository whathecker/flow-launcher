/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect, useContext } from "react";
import { useKeyboard } from "../hooks";
import { StyleSheet, Keyboard, ScrollView, Dimensions } from "react-native";
import { View, TouchableWithoutFeedback } from "../components/Themed";
import { Container, Color, Shadow } from "../styles";
import { GoalStackScreenProps } from "../types/navigation";
import { TasksContext } from "../contexts/tasks";

import {
  GoalDetailHeader,
  UnprioritizedTasks,
  PrioritizedTasks,
  AddTaskForm,
} from "../components/GoalDetail";
import { Button } from "../components/shared";

type Props = GoalStackScreenProps<"GoalDetail">;

function _getDynamicMarginForKeyboardHeight(
  keyboardHeight: number,
  elementHeightPercent: number,
): number {
  const windowsHeight = Dimensions.get("window").height;
  const remainderHeight = windowsHeight - keyboardHeight;
  const elementHeight = windowsHeight * elementHeightPercent;

  return remainderHeight - elementHeight;
}

const GoalDetailScreen: React.FC<Props> = ({ route }: Props) => {
  const { goal, goalColor } = route.params;
  const [addTaskFormOpened, setAddTaskFormOpened] = useState(false);
  const { fetchTasks } = useContext(TasksContext);

  const keyboardHeight = useKeyboard();

  useEffect(() => {
    fetchTasks({ goal, goalColor });
  }, [goal._id]);

  useEffect(() => {
    fetchTasks({ goal, goalColor });
  }, [addTaskFormOpened]);

  return (
    <>
      {addTaskFormOpened === true ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setAddTaskFormOpened(false);
            Keyboard.dismiss();
          }}
        >
          <View
            lightColor={Color.light.overlay}
            darkColor={Color.dark.overlay}
            style={styles.grayOverlay}
          ></View>
        </TouchableWithoutFeedback>
      ) : null}
      {addTaskFormOpened === true ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1300,
            marginTop: _getDynamicMarginForKeyboardHeight(
              keyboardHeight,
              0.415,
            ),
            marginLeft: "0.5%",
            marginRight: "0.5%",
            width: "99%",
            height: "41.5%",
            borderWidth: 2,
            borderColor: Color.light.defaultBorder,
            borderRadius: 5,
            ...Shadow.regularbackDrop,
          }}
        >
          <AddTaskForm
            goal_id={goal._id as string}
            addTaskFormOpenedHandler={setAddTaskFormOpened}
          />
        </View>
      ) : null}
      <View style={styles.headerWrapper}>
        <GoalDetailHeader title={goal.title} movitation={goal.motivation} />
      </View>
      <ScrollView style={styles.scrollAreaWrapper}>
        <View style={styles.recentTasksWrapper}>
          <UnprioritizedTasks />
        </View>
        <View style={styles.prioritizedTasksWrapper}>
          <PrioritizedTasks goalColor={goalColor} />
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          ctaTxt="Add Task"
          pressHandler={() => {
            setAddTaskFormOpened(true);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    minHeight: "20%",
    maxHeight: "25%",
    marginTop: 10,
  },
  scrollAreaWrapper: {
    //TODO: write a themed scroll view component
    backgroundColor: Color.light.background,
    borderColor: Color.light.defaultBorder,
    borderWidth: 0.25,
    minHeight: "75%",
  },
  recentTasksWrapper: {
    ...Container.centerAligned,
    alignItems: "flex-start",
    marginTop: "7%",
    marginBottom: "7%",
  },
  prioritizedTasksWrapper: {
    ...Container.centerAligned,
    alignItems: "flex-start",
    marginBottom: "30%",
  },
  buttonWrapper: {
    position: "absolute",
    ...Container.flexStart,
    width: "45%",
    bottom: "3.3%",
    right: "3.2%",
    zIndex: 2,
    borderRadius: 10,
  },
  addTaskFormWrapper: {
    position: "absolute",
    zIndex: 1300,
    marginTop: "56.5%",
    marginLeft: "0.5%",
    marginRight: "0.5%",
    width: "99%",
    height: "40.5%",
    borderWidth: 2,
    borderColor: Color.light.defaultBorder,
    borderRadius: 5,
    ...Shadow.regularbackDrop,
  },
  grayOverlay: {
    position: "absolute",
    zIndex: 1200,
    width: "100%",
    height: "30%",
    opacity: 0.35,
  },
});

export default GoalDetailScreen;
