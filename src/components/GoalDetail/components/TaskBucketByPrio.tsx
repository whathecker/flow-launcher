import React from "react";
import { Image } from "react-native";
import { Touchable, View, Text } from "../../Themed";
import { Color, Container, Typography } from "../../../styles";
import { Task, GoalColor } from "../../../types/core/entity";
import { PriorityTier } from "../../../types/core/value-object";
import { colorRenderer, labelRenderer, navigationRef } from "../../../utils";

type ActiveBucketProps = {
  prio: PriorityTier;
  backgroundColor: string;
  textColor: string;
  tasks: Task[];
};

function _trimTaskTitle(input: string): string {
  if (input.length > 10) {
    return input.slice(0, 20).concat(" ...");
  } else {
    return input;
  }
}

const ActiveBucket: React.FC<ActiveBucketProps> = ({
  prio,
  tasks,
  backgroundColor,
  textColor,
}: ActiveBucketProps) => {
  return (
    <Touchable
      onPress={() => {
        navigationRef.navigate("TasksByPrio", {
          backgroundColor: backgroundColor,
          prio: prio,
        });
      }}
      style={{
        width: "100%",
        height: 120,
        backgroundColor: backgroundColor,
        marginTop: 5,
        marginBottom: "3%",
        paddingTop: "4%",
        paddingBottom: "8%",
        borderWidth: 1,
        borderColor: Color.light.defaultBorder,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          backgroundColor: backgroundColor,
          paddingLeft: 15,
        }}
      >
        <Text
          style={{
            ...Typography.h4,
            fontSize: 15,
            fontWeight: "bold",
            color: textColor,
          }}
        >
          {labelRenderer.renderPrioBucketLabel(prio)}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: backgroundColor,
          paddingTop: "6%",
          paddingBottom: "2%",
          paddingLeft: "10%",
        }}
      >
        <Text
          style={{
            ...Typography.p,
            color: textColor,
            fontSize: 13,
          }}
        >{`${_trimTaskTitle(tasks[0].title)}`}</Text>
        {tasks.length > 1 ? (
          <Text
            style={{
              ...Typography.p,
              color: textColor,
              fontSize: 13,
              textDecorationLine: "underline",
              paddingTop: 5,
            }}
          >{`+ ${tasks.length - 1} more`}</Text>
        ) : null}
        <View
          style={{
            backgroundColor: backgroundColor,
            position: "absolute",
            top: -18,
            right: 15,
          }}
        >
          <Image
            style={{ width: 18, height: 18 }}
            source={require(`../../../../assets/images/right-arrow-white.png`)}
          />
        </View>
      </View>
    </Touchable>
  );
};

type EmptyBucketProps = {
  prio: PriorityTier;
  backgroundColor: string;
  textColor: string;
  tasks?: Task[];
};

const EmptyBucket: React.FC<EmptyBucketProps> = ({
  prio,
  backgroundColor,
  textColor,
}: EmptyBucketProps) => {
  return (
    <View
      style={{
        width: "100%",
        height: 120,
        backgroundColor: backgroundColor,
        marginTop: 5,
        marginBottom: "3%",
        paddingTop: "4%",
        paddingBottom: "8%",
        borderWidth: 1,
        borderColor: Color.light.defaultBorder,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          backgroundColor: backgroundColor,
          paddingLeft: 15,
        }}
      >
        <Text
          style={{
            ...Typography.h4,
            fontSize: 15,
            fontWeight: "bold",
            color: textColor,
          }}
        >
          {labelRenderer.renderPrioBucketLabel(prio)}
        </Text>
      </View>
      <View
        style={{
          ...Container.centerAligned,
          backgroundColor: backgroundColor,
          paddingTop: "9.5%",
        }}
      >
        <Text
          style={{
            ...Typography.p,
            fontSize: 12,
            color: textColor,
          }}
        >{`No tasks in this list`}</Text>
      </View>
    </View>
  );
};

type TaskBucketByPrioProps = {
  prio: PriorityTier;
  tasks: Task[];
  goalColor: GoalColor;
};

const TaskBucketByPrio: React.FC<TaskBucketByPrioProps> = ({
  prio,
  tasks,
  goalColor,
}: TaskBucketByPrioProps) => {
  const isTasksEmpty = tasks.length === 0;

  const backgroundColor = isTasksEmpty
    ? "#FEFEF8"
    : colorRenderer.getColorForPrioBucket(goalColor, prio);

  const textColor = isTasksEmpty
    ? Color.light.subtleLabel
    : Color.light.whiteText;

  return (
    <>
      {isTasksEmpty ? (
        <EmptyBucket
          prio={prio}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      ) : (
        <ActiveBucket
          prio={prio}
          tasks={tasks}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      )}
    </>
  );
};

export default TaskBucketByPrio;
