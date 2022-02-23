/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import React, { useContext } from "react";
import { TasksContext } from "../contexts/tasks";
import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { PriorReviewHeader } from "../components/PriorReview";
import { Button } from "../components/shared";
import { PriorStackScreenProps } from "../types/navigation";
import { taskFilters } from "../utils";
import { Container } from "../styles";

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
      <View style={styles.priorityAreaWrapper}>
        <Text>{`Prior Buckets to display here`}</Text>
      </View>
      <View style={styles.buttonAreaWrapper}>
        <View style={{ width: "80%" }}>
          <Button
            ctaTxt="Review"
            pressHandler={() => console.log("pressed!")}
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
    height: "61.5%",
    paddingTop: "12%",
    paddingLeft: "10%",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonAreaWrapper: {
    ...Container.centerAligned,
    height: "13.5%",
  },
});

export default PriorReview;
