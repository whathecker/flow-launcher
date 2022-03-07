import React from "react";
import { Text } from "../../Themed";
import { Typography, Color } from "../../../styles";

type TaskTitleProps = {
  title: string;
};

const TaskTitle: React.FC<TaskTitleProps> = ({ title }: TaskTitleProps) => {
  return (
    <>
      <Text style={{ ...Typography.p, fontSize: 20, color: Color.light.text }}>
        {title}
      </Text>
    </>
  );
};

export default TaskTitle;
