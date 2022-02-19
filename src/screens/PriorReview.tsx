/* eslint-disable no-console */
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { Container } from "../styles";
import { PriorStackScreenProps } from "../types/navigation";
import { taskFilters } from "../utils";

type Props = PriorStackScreenProps<"PriorReview">;

const PriorReview: React.FC<Props> = ({ route }: Props) => {
  const { tasks } = route.params;

  const tasksFilteredByPrio = taskFilters.filterByPriorityScheme(tasks);
  console.log(tasksFilteredByPrio);
  return (
    <View style={styles.wrapper}>
      <Text>{`Prior Review screen`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...Container.centerAligned,
  },
});

export default PriorReview;
