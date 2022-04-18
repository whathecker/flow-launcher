/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Image } from "react-native";
import { View, Text } from "../Themed";
import { GoBackButtonWhite } from "../shared";
import { Container, Typography, Color } from "../../styles";
import { navigationRef } from "../../utils";
import { PriorityTier } from "../../types/core/value-object";

type TasksByPrioHeaderProps = {
  prio: PriorityTier;
  goalTitle: string; // TODO: consider to use state from task context instead?
  label: string;
  backgroundColor: string;
};

//TODO: consider to use default View for the nested one?
const TasksByPrioHeader: React.FC<TasksByPrioHeaderProps> = ({
  prio,
  goalTitle,
  label,
  backgroundColor,
}: TasksByPrioHeaderProps) => {
  return (
    <View lightColor={backgroundColor} darkColor={backgroundColor}>
      <View
        lightColor={backgroundColor}
        darkColor={backgroundColor}
        style={{
          marginTop: "13%",
          ...Container.flexStart,
          //minHeight: "50%",
        }}
      >
        <View
          lightColor={backgroundColor}
          darkColor={backgroundColor}
          style={{
            paddingLeft: "8%",
            paddingTop: "2.5%",
          }}
        >
          <GoBackButtonWhite
            backgroundColor={backgroundColor}
            pressHandler={() => navigationRef.goBack()}
          />
        </View>
      </View>
      <View
        lightColor={backgroundColor}
        darkColor={backgroundColor}
        style={{
          paddingTop: "7%",
          paddingLeft: "12%",
        }}
      >
        <View
          lightColor={backgroundColor}
          darkColor={backgroundColor}
          style={{ ...Container.flexStart, paddingBottom: "12%" }}
        >
          <Image
            style={{ width: 32, height: 32 }}
            source={require("../../../assets/images/double-exclamation-mark_203c-fe0f.png")}
          />
          <Text
            lightColor={Color.light.textOnColorForRead}
            darkColor={Color.dark.textOnColorForRead}
            style={{
              ...Typography.p,
              fontSize: 18,
              paddingLeft: "3%",
            }}
          >
            {label}
          </Text>
        </View>
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
      </View>
    </View>
  );
};

export default TasksByPrioHeader;
