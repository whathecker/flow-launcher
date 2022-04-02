import React from "react";
import { Text } from "../../Themed";
import { Typography, Color } from "../../../styles";

type TaskCounterProps = {
  currentTaskIndex: number;
  totalTasksLength: number;
};

const TaskCounter: React.FC<TaskCounterProps> = ({
  currentTaskIndex,
  totalTasksLength,
}: TaskCounterProps) => {
  const currentTaskCounter = currentTaskIndex + 1;
  return (
    <>
      <Text
        style={{
          ...Typography.p,
          fontSize: 14,
          color: Color.light.subtleLabel,
        }}
      >{`Task (${currentTaskCounter} of ${totalTasksLength})`}</Text>
    </>
  );
};

export default TaskCounter;
