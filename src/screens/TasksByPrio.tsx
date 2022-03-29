/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from "react";
import { TasksContext } from "../contexts/tasks";
import { View, Text } from "../components/Themed";
import { TasksByPrioHeader, TasksList } from "../components/TasksByPrio";
import { GoalStackScreenProps } from "../types/navigation";
import { labelRenderer } from "../utils";

type Props = GoalStackScreenProps<"TasksByPrio">;

const TasksByPrioScreen: React.FC<Props> = ({ route }: Props) => {
  const prio = route.params.prio;
  const backgroundColor = route.params.backgroundColor;

  const { state } = useContext(TasksContext);
  const headerLabel = labelRenderer.renderPrioBucketLabel(prio);

  return (
    <>
      <View
        style={{
          height: "25%",
          backgroundColor: backgroundColor,
        }}
      >
        <TasksByPrioHeader
          goalTitle={state.goal!.title}
          label={headerLabel}
          backgroundColor={backgroundColor}
        />
      </View>
      <View
        style={{
          height: "64%",
          backgroundColor: backgroundColor,
        }}
      >
        <TasksList prio={prio} />
      </View>
      <View
        style={{
          height: "11%",
          backgroundColor: backgroundColor,
        }}
      >
        <Text>{`Completed task area`}</Text>
      </View>
    </>
  );
};

export default TasksByPrioScreen;
