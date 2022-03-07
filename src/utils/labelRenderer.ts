import { PriorityTier } from "../types/core/value-object";

const renderPrioBucketLabel = (prio: PriorityTier): string => {
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

export default { renderPrioBucketLabel };
