import React from "react";
import { View, Text } from "../Themed";
import { Container, Typography, Color } from "../../styles";
import { Task, GoalColor } from "../../types/core/entity";
import { PriorityTier } from "../../types/core/value-object";
import { colorRenderer } from "../../utils";

type PrioReviewBucketProps = {
  prio: PriorityTier;
  tasks: Task[];
  goalColor: GoalColor;
};

const renderLabel = (prio: PriorityTier): string => {
  let label = "";
  switch (prio) {
    case "highest":
      label = "1. Do these before anything else";
      break;
    case "high":
      label = "2. Sort these important things out";
      break;
    case "mid":
      label = "3. These can wait a bit";
      break;
    case "low":
      label = "4. These are for spare time";
      break;
    default:
      // TODO: Add error handling here
      break;
  }
  return label;
};

const PrioReviewBucket: React.FC<PrioReviewBucketProps> = ({
  prio,
  tasks,
  goalColor,
}: PrioReviewBucketProps) => {
  const backgroundColor = colorRenderer.getColorForPrioBucket(goalColor, prio);
  const isTasksEmpty = tasks.length === 0;
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: isTasksEmpty ? "#FEFEF8" : backgroundColor,
        marginTop: 5,
        marginBottom: 5,
        paddingTop: "3%",
        paddingBottom: "3%",
        borderWidth: 1,
        borderColor: Color.light.defaultBorder,
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          ...Typography.h4,
          fontSize: 17,
          paddingLeft: "5%",
          color: isTasksEmpty ? Color.light.text : Color.light.whiteText,
        }}
      >
        {renderLabel(prio)}
      </Text>
      {isTasksEmpty ? (
        <View
          style={{
            ...Container.centerAligned,
            paddingTop: "10%",
            paddingBottom: "6%",
            backgroundColor: "#FEFEF8",
          }}
        >
          <Text
            style={{
              ...Typography.p,
              fontSize: 14,
              color: Color.light.subtleLabel,
            }}
          >{`No awaiting tasks`}</Text>
        </View>
      ) : (
        <View
          style={{
            ...Container.centerAligned,
            paddingTop: "10%",
            paddingBottom: "6%",
            backgroundColor: backgroundColor,
          }}
        >
          <Text
            style={{
              ...Typography.p,
              fontSize: 14,
              color: Color.light.whiteText,
            }}
          >{`render tasks here`}</Text>
        </View>
      )}
    </View>
  );
};

export default PrioReviewBucket;
