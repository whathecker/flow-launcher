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
import { Color } from "../styles";
import { GoalColor } from "../types/core/entity";

type Props = PriorStackScreenProps<"PriorReview">;

const PriorReview: React.FC<Props> = ({ route }: Props) => {
  const { state } = useContext(TasksContext);
  const { tasks } = route.params;

  const tasksFilteredByPrio = taskFilters.filterByPriorityScheme(tasks);
  console.log(tasksFilteredByPrio);
  console.log("Main color of this goal is following");
  console.log(state.goalColor);
  return (
    <>
      <View style={styles.headerWraper}>
        <PriorReviewHeader
          title={state.goal!.title}
          motivation={state.goal!.motivation}
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
        <View style={styles.buttonAreaWrapper}>
          <View style={{ width: "90%" }}>
            <Button
              ctaTxt="Review"
              pressHandler={() => console.log("pressed!")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerWraper: {
    height: "25%",
  },
  priorityAreaWrapper: {
    backgroundColor: Color.light.background,
    height: "75%",
    paddingTop: "4%",
    paddingLeft: "10%",
  },
  buttonAreaWrapper: {
    marginTop: 20,
  },
});

export default PriorReview;
