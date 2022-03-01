import React from "react";
import { SectionList, ListRenderItem } from "react-native";
import { View, Text } from "../Themed";
import { EmptyBucket } from "./components";
import { TaskReadable } from "../shared";
import { Typography, Color } from "../../styles";
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

  const sectionData = [
    {
      title: renderLabel(prio),
      data: tasks,
    },
  ];

  const renderTaskReadable: ListRenderItem<Task> = ({ item }) => {
    return <TaskReadable title={item.title} />;
  };

  return (
    <View
      style={{
        width: "90%",
        backgroundColor: isTasksEmpty ? "#FEFEF8" : backgroundColor,
        marginTop: 5,
        marginBottom: 5,
        paddingTop: "4%",
        paddingBottom: "8%",
        borderWidth: 1,
        borderColor: Color.light.defaultBorder,
        borderRadius: 5,
      }}
    >
      {isTasksEmpty ? (
        <EmptyBucket title={renderLabel(prio)} />
      ) : (
        <View
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <SectionList
            sections={sectionData}
            renderItem={renderTaskReadable}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  textAlign: "left",
                  ...Typography.h4,
                  fontSize: 19,
                  paddingLeft: "5%",
                  paddingBottom: "5%",
                  color: isTasksEmpty
                    ? Color.light.text
                    : Color.light.whiteText,
                }}
              >
                {title}
              </Text>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default PrioReviewBucket;
