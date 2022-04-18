import React from "react";
import { View, Text } from "../Themed";
import {
  GoBackButtonWhite,
  HighestPrioIcon,
  HighPrioIcon,
  MidPrioIcon,
  LowPrioIcon,
} from "../shared";
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
          {prio === "highest" ? (
            <HighestPrioIcon style={{ width: 32, height: 32 }} />
          ) : null}
          {prio === "high" ? (
            <HighPrioIcon style={{ width: 32, height: 32 }} />
          ) : null}
          {prio === "mid" ? (
            <MidPrioIcon style={{ width: 32, height: 32 }} />
          ) : null}
          {prio === "low" ? (
            <LowPrioIcon style={{ width: 32, height: 32 }} />
          ) : null}
          <Text
            lightColor={Color.light.textOnColorForRead}
            darkColor={Color.dark.textOnColorForRead}
            style={{
              ...Typography.p,
              fontSize: 18,
              paddingLeft: "3.5%",
              paddingTop: "0.15%",
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
