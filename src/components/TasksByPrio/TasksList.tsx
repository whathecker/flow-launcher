/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useContext } from "react";
import { TasksContext } from "../../contexts/tasks";
import { StyleSheet, Image } from "react-native";
import { Touchable, Text } from "../Themed";

import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import CheckBox from "react-native-check-box";

import { Container, Typography, Color } from "../../styles";

import { Task, TaskStatus } from "../../types/core/entity";
import { PriorityTier } from "../../types/core/value-object";

type TasksListProps = {
  prio: PriorityTier;
};

function _convertTaskStatusToBool(input: TaskStatus): boolean {
  let result = false;

  input === "finished" ? (result = true) : null;
  return result;
}

function _getNextStatus(input: TaskStatus): TaskStatus {
  if (input === "open") {
    return "finished";
  } else {
    return "open";
  }
}

const TasksList: React.FC<TasksListProps> = ({ prio }: TasksListProps) => {
  const { state, updatePrioTasksIndex, updateTaskStatus } =
    useContext(TasksContext);

  let tasks: Task[] = [];

  prio === "highest" ? (tasks = state.highestPrioTasks) : null;
  prio === "high" ? (tasks = state.highPrioTasks) : null;
  prio === "mid" ? (tasks = state.midPrioTasks) : null;
  prio === "low" ? (tasks = state.lowPrioTasks) : null;

  tasks
    .filter((item) => item.status === "open")
    .sort((a, b) => {
      return a.priority!.index - b.priority!.index;
    });

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Task>) => {
    const taskStatusInBool = _convertTaskStatusToBool(item.status);
    const [status] = useState(taskStatusInBool);

    return (
      <ScaleDecorator>
        <Touchable
          style={styles.taskWrapper}
          onPressIn={drag}
          disabled={isActive}
        >
          <CheckBox
            style={{ borderRadius: 10, paddingRight: 15 }}
            isChecked={status}
            onClick={async () => {
              await updateTaskStatus({
                goal_id: state.goal!._id as string,
                task_id: item._id as string,
                status: _getNextStatus(item.status),
              });
            }}
            checkedImage={
              <Image
                style={styles.checkboxImage}
                source={require(`../../../assets/images/checkbox_checked.png`)}
              />
            }
            unCheckedImage={
              <Image
                style={styles.checkboxImage}
                source={require(`../../../assets/images/checkbox_unchecked.png`)}
              />
            }
          />
          <Text
            style={{
              ...Typography.p,
              fontSize: 18,
              paddingLeft: "2.5%",
              textDecorationLine: status ? "line-through" : "none",
            }}
          >
            {item.title}
          </Text>
        </Touchable>
      </ScaleDecorator>
    );
  };

  return (
    <DraggableFlatList
      data={tasks}
      onDragEnd={async ({ data }) => {
        const updatedTasksArr = data.map((task, index) => {
          return {
            ...task,
            priority: {
              index: index,
              tier: task.priority!.tier,
              importance: task.priority!.importance,
              urgency: task.priority!.urgency,
            },
          };
        });
        const payload = {
          goal_id: state.goal!._id as string,
          tasks: updatedTasksArr,
        };
        await updatePrioTasksIndex(payload);
      }}
      keyExtractor={(item) => item._id as string}
      renderItem={renderItem}
      containerStyle={styles.wrapper}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "80%",
    height: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
  },
  taskWrapper: {
    ...Container.flexStart,
    width: "100%",
    borderColor: Color.light.defaultBorder,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 2.5,
    marginBottom: 2.5,
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "6%",
  },
  taskTitle: {
    ...Typography.p,
    fontSize: 18,
    paddingLeft: "2.5%",
  },
  checkboxImage: {
    width: 24,
    height: 24,
  },
});

export default TasksList;
