/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import React, { useContext } from "react";
import { TasksContext } from "../contexts/tasks";
import { StyleSheet, ScrollView } from "react-native";
import { View } from "../components/Themed";
import { PriorReviewHeader, PrioReviewBucket } from "../components/PriorReview";
import { Button } from "../components/shared";
import { PriorStackScreenProps } from "../types/navigation";
import { taskManager, navigationRef } from "../utils";
import { Container, Color } from "../styles";

type Props = PriorStackScreenProps<"PriorReview">;

const PriorReview: React.FC<Props> = ({ route }: Props) => {
  const { state, updateTasksPrio } = useContext(TasksContext);
  const { tasks } = route.params;

  const tasksFilteredByPrio = taskManager.filterByPriorityScheme(tasks);

  return (
    <>
      <View style={styles.headerWraper}>
        <PriorReviewHeader
          title={state.goal!.title}
          tasksCount={tasks.length}
        />
      </View>
      <ScrollView style={styles.priorityAreaWrapper}>
        <PrioReviewBucket tasks={tasksFilteredByPrio.highest} prio="highest" />
        <PrioReviewBucket tasks={tasksFilteredByPrio.high} prio="high" />
        <PrioReviewBucket tasks={tasksFilteredByPrio.mid} prio="mid" />
        <PrioReviewBucket tasks={tasksFilteredByPrio.low} prio="low" />
      </ScrollView>
      <View style={styles.buttonAreaWrapper}>
        <View style={{ width: "80%" }}>
          <Button
            ctaTxt="Confirm Result"
            pressHandler={async () => {
              try {
                await updateTasksPrio({
                  tasks: tasks,
                  goal_id: state.goal!._id as string,
                });
                navigationRef.navigate("GoalDetail", {
                  goal: state.goal,
                  goalColor: state.goalColor,
                });
              } catch (error) {
                // TODO: handle error gracefully here
                console.error(error);
              }
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWraper: {
    height: "25%",
  },
  priorityAreaWrapper: {
    backgroundColor: Color.light.background,
    height: "65%",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "10%",
  },
  buttonAreaWrapper: {
    ...Container.centerAligned,
    height: "10%",
    paddingBottom: "5%",
  },
});

export default PriorReview;
