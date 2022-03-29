import React from "react";
//import { TasksContext } from "../../contexts/tasks";
//import { StyleSheet, Image } from "react-native";
import { Text } from "../Themed";

import { PriorityTier } from "../../types/core/value-object";

type CompleteTasksListProps = {
  prio: PriorityTier;
};

const CompleteTasksList: React.FC<CompleteTasksListProps> = ({
  prio,
}: CompleteTasksListProps) => {
  return (
    <>
      <Text>{`Complete task list for ${prio}`}</Text>
    </>
  );
};

export default CompleteTasksList;
