import { PriorityTier } from "../types/core/value-object";

const renderPrioBucketLabel = (prio: PriorityTier): string => {
  let label = "";
  switch (prio) {
    case "highest":
      label = "Highest priority";
      break;
    case "high":
      label = "High priority";
      break;
    case "mid":
      label = "Mid priority";
      break;
    case "low":
      label = "Low priority";
      break;
    default:
      // TODO: Add error handling here
      break;
  }
  return label;
};

export default { renderPrioBucketLabel };
