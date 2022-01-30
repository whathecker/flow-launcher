import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Keyboard, ScrollView } from "react-native";
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

const GoalDetailScreen: React.FC<Props> = ({ route }: Props) => {
  const { goal } = route.params;
  const [addTaskFormOpened, setAddTaskFormOpened] = useState(false);
  const { fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks({ goal_id: goal._id as string });
  }, [goal._id]);

  return (
    <>
      {addTaskFormOpened === true ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setAddTaskFormOpened(false);
            Keyboard.dismiss();
          }}
        >
          <View style={styles.grayOverlay}></View>
        </TouchableWithoutFeedback>
      ) : null}
      {addTaskFormOpened === true ? (
        <View style={styles.addTaskFormWrapper}>
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
          <PrioritizedTasks />
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
    height: "25%",
    marginTop: 10,
  },
  scrollAreaWrapper: {
    backgroundColor: Color.light.background,
    borderColor: Color.light.defaultBorder,
    borderWidth: 1,
    height: 700,
  },
  recentTasksWrapper: {
    ...Container.centerAligned,
    alignItems: "flex-start",
    marginTop: 50,
    height: 300,
  },
  prioritizedTasksWrapper: {
    ...Container.centerAligned,
    alignItems: "flex-start",
    height: 700,
  },
  buttonWrapper: {
    position: "absolute",
    ...Container.flexStart,
    width: "45%",
    bottom: "3.3%",
    right: "3.2%",
    zIndex: 2,
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
    backgroundColor: Color.light.overlay,
    opacity: 0.35,
  },
});

export default GoalDetailScreen;
