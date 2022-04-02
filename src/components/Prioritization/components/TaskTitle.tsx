import React from "react";
import { Text } from "../../Themed";
import { Typography, Color } from "../../../styles";

type TaskTitleProps = {
  title: string;
};

const TaskTitle: React.FC<TaskTitleProps> = ({ title }: TaskTitleProps) => {
  return (
    <>
      <Text
        style={{
          ...Typography.h4,
          fontSize: 18,
          color: Color.light.subtleLabel,
        }}
      >
        {title}
      </Text>
    </>
  );
};

export default TaskTitle;
