import React from "react";
import { Image } from "react-native";
import { Touchable, View, Text } from "../../Themed";
import { Color, Container, Typography, Shadow } from "../../../styles";
import { Task, GoalColor } from "../../../types/core/entity";
import { PriorityTier } from "../../../types/core/value-object";
import { labelRenderer, navigationRef } from "../../../utils";

type ActiveBucketProps = {
  prio: PriorityTier;
  goalColor: string;
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
  goalColor,
}: ActiveBucketProps) => {
  return (
    <Touchable
      onPress={() => {
        navigationRef.navigate("TasksByPrio", {
          backgroundColor: goalColor,
          prio: prio,
        });
      }}
      style={{
        width: "100%",
        height: 120,
        marginTop: 5,
        marginBottom: "3%",
        paddingTop: "4%",
        paddingBottom: "8%",
        borderWidth: 0.5,
        borderColor: Color.light.defaultBorder,
        borderRadius: 5,
        ...Shadow.regularbackDrop,
      }}
    >
      <View
        style={{
          ...Container.flexStart,
          paddingLeft: 15,
        }}
      >
        {prio === "highest" ? (
          <Image
            style={{ width: 32, height: 32 }}
            source={require("../../../../assets/images/double-exclamation-mark_203c-fe0f.png")}
          />
        ) : null}
        {prio === "high" ? (
          <Image
            style={{ width: 32, height: 32 }}
            source={require("../../../../assets/images/glowing-star_1f31f.png")}
          />
        ) : null}
        {prio === "mid" ? (
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../../assets/images/mantelpiece-clock_1f570-fe0f.png")}
          />
        ) : null}
        {prio === "low" ? (
          <Image
            style={{ width: 32, height: 32 }}
            source={require("../../../../assets/images/turtle_1f422.png")}
          />
        ) : null}
        <Text
          lightColor={Color.light.textOnBackgroundForRead}
          darkColor={Color.dark.textOnBackgroundForRead}
          style={{
            ...Typography.h4,
            fontSize: 15,
            paddingTop: 5,
            paddingLeft: 18,
          }}
        >
          {labelRenderer.renderPrioBucketLabel(prio)}
        </Text>
      </View>
      <View
        style={{
          paddingTop: "6%",
          paddingBottom: "2%",
          paddingLeft: "10%",
        }}
      >
        <Text
          lightColor={Color.light.textOnBackgroundForRead}
          darkColor={Color.dark.textOnBackgroundForRead}
          style={{
            ...Typography.p,
            fontSize: 13,
          }}
        >{`${_trimTaskTitle(tasks[0].title)}`}</Text>
        {tasks.length > 1 ? (
          <Text
            lightColor={Color.light.textOnBackgroundForRead}
            darkColor={Color.dark.textOnBackgroundForRead}
            style={{
              ...Typography.p,
              fontSize: 13,
              textDecorationLine: "underline",
              paddingTop: 5,
            }}
          >{`+ ${tasks.length - 1} more`}</Text>
        ) : null}
        <View
          style={{
            position: "absolute",
            top: 42,
            right: 15,
          }}
        >
          <Image
            style={{ width: 18, height: 18 }}
            source={require(`../../../../assets/images/right-arrow_gray.png`)}
          />
        </View>
      </View>
    </Touchable>
  );
};

type EmptyBucketProps = {
  prio: PriorityTier;
  tasks?: Task[];
};

const EmptyBucket: React.FC<EmptyBucketProps> = ({
  prio,
}: EmptyBucketProps) => {
  return (
    <View
      lightColor={Color.light.emptyPrioBucket}
      darkColor={Color.dark.emptyPrioBucket}
      style={{
        width: "100%",
        height: 120,
        marginTop: 5,
        marginBottom: "3%",
        paddingTop: "4%",
        paddingBottom: "8%",
        borderWidth: 0.5,
        borderColor: Color.light.defaultBorder,
        borderRadius: 5,
      }}
    >
      <View
        lightColor={Color.light.emptyPrioBucket}
        darkColor={Color.dark.emptyPrioBucket}
        style={{ ...Container.flexStart, paddingLeft: 15 }}
      >
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../../../../assets/images/open-file-folder_1f4c2.png")}
        />
        <Text
          lightColor={Color.light.labelOnBackgroundForRead}
          darkColor={Color.dark.labelOnBackgroundForRead}
          style={{
            ...Typography.h4,
            fontSize: 15,
            paddingTop: 5,
            paddingLeft: 22,
          }}
        >
          {labelRenderer.renderPrioBucketLabel(prio)}
        </Text>
      </View>
      <View
        lightColor={Color.light.emptyPrioBucket}
        darkColor={Color.dark.emptyPrioBucket}
        style={{
          ...Container.centerAligned,
          paddingTop: "9.5%",
        }}
      >
        <Text
          lightColor={Color.light.labelOnBackgroundForRead}
          darkColor={Color.dark.labelOnBackgroundForRead}
          style={{
            ...Typography.p,
            fontSize: 12,
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

  return (
    <>
      {isTasksEmpty ? (
        <EmptyBucket prio={prio} />
      ) : (
        <ActiveBucket prio={prio} tasks={tasks} goalColor={goalColor} />
      )}
    </>
  );
};

export default TaskBucketByPrio;
