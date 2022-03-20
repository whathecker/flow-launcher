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
import { Task } from "../../types/core/entity";
import { PriorityTier } from "../../types/core/value-object";

type TasksListProps = {
  prio: PriorityTier;
  tasks: Task[];
};

const TasksList: React.FC<TasksListProps> = ({
  prio,
  tasks,
}: TasksListProps) => {
  const { state, updatePrioTasksIndex } = useContext(TasksContext);
  console.log(prio);
  console.log(tasks);

  tasks.sort((a, b) => {
    return a.priority!.index - b.priority!.index;
  });

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Task>) => {
    const [status, setStatus] = useState(false);
    //TODO: use actual status from task object
    //update the task status at the onClick handler
    // translate "open" to false "finished" to true
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
            onClick={() => setStatus(!status)}
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
      //TODO: update the order of task in bulk at onDragEnd
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
