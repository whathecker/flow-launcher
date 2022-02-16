/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Task } from "../types/core/entity";

const filterUnprioritized = (tasks: Task[]): Task[] => {
  return tasks.filter((task) => {
    return task.status === "open" && task.priority!.tier === "n/a";
  });
};

export default { filterUnprioritized };
