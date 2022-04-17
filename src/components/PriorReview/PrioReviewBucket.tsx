import React from "react";
import { SectionList, ListRenderItem, Image } from "react-native";
import { View, Text } from "../Themed";
import { EmptyBucket, TaskReadable } from "./components";
import { Typography, Color, Container } from "../../styles";
import { Task } from "../../types/core/entity";
import { PriorityTier } from "../../types/core/value-object";
import { labelRenderer } from "../../utils";

type PrioReviewBucketProps = {
  prio: PriorityTier;
  tasks: Task[];
};

const PrioReviewBucket: React.FC<PrioReviewBucketProps> = ({
  prio,
  tasks,
}: PrioReviewBucketProps) => {
  const isTasksEmpty = tasks.length === 0;
  const lightBackgroundColor = isTasksEmpty
    ? Color.light.emptyPrioBucket
    : Color.light.background;
  const darkBackgroundColor = isTasksEmpty
    ? Color.dark.emptyPrioBucket
    : Color.dark.background;
  const lightTextColor = isTasksEmpty
    ? Color.light.labelOnBackgroundForRead
    : Color.light.textOnBackgroundForRead;
  const darkTextColor = isTasksEmpty
    ? Color.dark.labelOnBackgroundForRead
    : Color.dark.textOnBackgroundForRead;

  const sectionData = [
    {
      prio: prio,
      title: labelRenderer.renderPrioBucketLabel(prio),
      data: tasks,
    },
  ];

  const renderTaskReadable: ListRenderItem<Task> = ({ item }) => {
    return <TaskReadable title={item.title} />;
  };

  return (
    <View
      lightColor={lightBackgroundColor}
      darkColor={darkBackgroundColor}
      style={{
        width: "90%",
        marginTop: 5,
        marginBottom: "3%",
        paddingTop: "4%",
        paddingBottom: "8%",
        borderWidth: 0.5,
        borderColor: Color.light.defaultBorder,
        borderRadius: 5,
      }}
    >
      {isTasksEmpty ? (
        <EmptyBucket title={labelRenderer.renderPrioBucketLabel(prio)} />
      ) : (
        <View lightColor={lightBackgroundColor} darkColor={darkBackgroundColor}>
          <SectionList
            sections={sectionData}
            renderItem={renderTaskReadable}
            renderSectionHeader={({ section: { prio, title } }) => (
              <View
                style={{
                  ...Container.flexStart,
                  paddingLeft: "6%",
                  paddingBottom: "5%",
                }}
              >
                {prio === "highest" ? (
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../../../assets/images/double-exclamation-mark_203c-fe0f.png")}
                  />
                ) : null}
                {prio === "high" ? (
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../../../assets/images/glowing-star_1f31f.png")}
                  />
                ) : null}
                {prio === "mid" ? (
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../../assets/images/mantelpiece-clock_1f570-fe0f.png")}
                  />
                ) : null}
                {prio === "low" ? (
                  <Image
                    style={{ width: 32, height: 32 }}
                    source={require("../../../assets/images/turtle_1f422.png")}
                  />
                ) : null}
                <Text
                  lightColor={lightTextColor}
                  darkColor={darkTextColor}
                  style={{
                    textAlign: "left",
                    ...Typography.h4,
                    fontSize: 16,
                    paddingLeft: "5%",
                    paddingBottom: "5%",
                    paddingTop: "2%",
                  }}
                >
                  {title}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default PrioReviewBucket;
