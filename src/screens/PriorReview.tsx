/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import React, { useContext } from "react";
import { TasksContext } from "../contexts/tasks";
import { StyleSheet, ScrollView } from "react-native";
import { View } from "../components/Themed";
import { PriorReviewHeader, PrioReviewBucket } from "../components/PriorReview";
import { Button } from "../components/shared";
import { PriorStackScreenProps } from "../types/navigation";
import { taskFilters } from "../utils";
import { Container, Color } from "../styles";
import { GoalColor } from "../types/core/entity";

type Props = PriorStackScreenProps<"PriorReview">;

const PriorReview: React.FC<Props> = ({ route }: Props) => {
  const { state } = useContext(TasksContext);
  const { tasks } = route.params;

  const tasksFilteredByPrio = taskFilters.filterByPriorityScheme(tasks);

  return (
    <>
      <View style={styles.headerWraper}>
        <PriorReviewHeader
          title={state.goal!.title}
          tasksCount={tasks.length}
        />
      </View>
      <ScrollView style={styles.priorityAreaWrapper}>
        <PrioReviewBucket
          tasks={tasksFilteredByPrio.highest}
          prio="highest"
          goalColor={state.goalColor as GoalColor}
        />
        <PrioReviewBucket
          tasks={tasksFilteredByPrio.high}
          prio="high"
          goalColor={state.goalColor as GoalColor}
        />
        <PrioReviewBucket
          tasks={tasksFilteredByPrio.mid}
          prio="mid"
          goalColor={state.goalColor as GoalColor}
        />
        <PrioReviewBucket
          tasks={tasksFilteredByPrio.low}
          prio="low"
          goalColor={state.goalColor as GoalColor}
        />
      </ScrollView>
      <View style={styles.buttonAreaWrapper}>
        <View style={{ width: "80%" }}>
          <Button
            ctaTxt="Confirm Result"
            pressHandler={async () => {
              try {
                console.log("pressed");
                console.log(tasks);
              } catch (error) {
                console.log(error);
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
  },
});

export default PriorReview;
