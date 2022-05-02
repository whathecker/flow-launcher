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
        lightColor={Color.light.textOnBackgroundForRead}
        darkColor={Color.dark.textOnBackgroundForRead}
        style={{
          ...Typography.h4,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </>
  );
};

export default TaskTitle;
