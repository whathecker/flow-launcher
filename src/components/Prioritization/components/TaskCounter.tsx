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
        lightColor={Color.light.labelOnBackgroundForRead}
        darkColor={Color.dark.labelOnBackgroundForRead}
        style={{
          ...Typography.p,
          fontSize: 14,
        }}
      >{`Task (${currentTaskCounter} of ${totalTasksLength})`}</Text>
    </>
  );
};

export default TaskCounter;
