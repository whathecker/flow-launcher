/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from "react";
import { TasksContext } from "../contexts/tasks";
import { View } from "../components/Themed";
import { TasksByPrioHeader, TasksList } from "../components/TasksByPrio";

import { GoalStackScreenProps } from "../types/navigation";
import { Task } from "../types/core/entity";
import { labelRenderer } from "../utils";

type Props = GoalStackScreenProps<"TasksByPrio">;

const TasksByPrioScreen: React.FC<Props> = ({ route }: Props) => {
  const prio = route.params.prio;
  const backgroundColor = route.params.backgroundColor;

  const { state } = useContext(TasksContext);
  const headerLabel = labelRenderer.renderPrioBucketLabel(prio);

  const goal = state.goal;

  let tasks: Task[] = [];

  prio === "highest" ? (tasks = state.highestPrioTasks) : null;
  prio === "high" ? (tasks = state.highPrioTasks) : null;
  prio === "mid" ? (tasks = state.midPrioTasks) : null;
  prio === "low" ? (tasks = state.lowPrioTasks) : null;

  return (
    <>
      <View
        style={{
          height: "28%",
          backgroundColor: backgroundColor,
        }}
      >
        <TasksByPrioHeader
          prio={prio}
          goalTitle={state.goal!.title}
          label={headerLabel}
          backgroundColor={backgroundColor}
        />
      </View>
      <View
        style={{
          height: "72%",
          backgroundColor: backgroundColor,
          paddingBottom: "5%",
        }}
      >
        <TasksList goal={goal!} tasks={tasks} />
      </View>
    </>
  );
};

export default TasksByPrioScreen;
