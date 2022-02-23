/* eslint-disable no-console */
import React, { useContext } from "react";
import { TasksContext } from "../contexts/tasks";
import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
//import { Container } from "../styles";
import { PriorStackScreenProps } from "../types/navigation";
import { taskFilters } from "../utils";

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
        <Text>{`Prior Review screen`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWraper: {
    height: "25%",
  },
});

export default PriorReview;
