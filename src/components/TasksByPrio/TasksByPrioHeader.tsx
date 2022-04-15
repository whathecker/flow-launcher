import React from "react";
import { View, Text } from "../Themed";
import { GoBackButtonWhite } from "../shared";
import { Container, Typography, Color } from "../../styles";
import { navigationRef } from "../../utils";

type TasksByPrioHeaderProps = {
  goalTitle: string; // TODO: consider to use state from task context instead?
  label: string;
  backgroundColor: string;
};

//TODO: consider to use default View for the nested one?
const TasksByPrioHeader: React.FC<TasksByPrioHeaderProps> = ({
  goalTitle,
  label,
  backgroundColor,
}: TasksByPrioHeaderProps) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <View
        style={{
          marginTop: "13%",
          backgroundColor: backgroundColor,
          ...Container.flexStart,
          height: "40%",
        }}
      >
        <View
          style={{
            backgroundColor: backgroundColor,
            paddingLeft: "8%",
            paddingTop: 0,
          }}
        >
          <GoBackButtonWhite
            backgroundColor={backgroundColor}
            pressHandler={() => navigationRef.goBack()}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: backgroundColor,
          paddingTop: "0.5%",
          paddingLeft: "12%",
        }}
      >
        <Text
          lightColor={Color.light.textOnColorForRead}
          darkColor={Color.dark.textOnColorForRead}
          style={{
            ...Typography.h4,
            fontSize: 22,
            paddingBottom: "6%",
          }}
        >
          {goalTitle}
        </Text>
        <Text
          lightColor={Color.light.textOnColorForRead}
          darkColor={Color.dark.textOnColorForRead}
          style={{
            ...Typography.p,
            fontSize: 18,
          }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default TasksByPrioHeader;
