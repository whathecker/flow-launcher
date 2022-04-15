import { GoalColor } from "../types/core/entity";
import {
  PriorityTier,
  PriorityBucketColor,
  ColorShadeForFirstGoalColor,
  ColorShadeForSecondGoalColor,
  ColorShadeForThirdGoalColor,
  ColorShadeForFourthGoalColor,
} from "../types/core/value-object";

const assignColorForGoal = (index: number): GoalColor => {
  if (_isFirstColor(index)) return "#E9695B";

  let color;
  switch (_findColorToRender(index)) {
    case 1:
      color = "#84C5E8";
      break;
    case 2:
      color = "#1C88BA";
      break;
    case 3:
      color = "#F0B541";
      break;
    default:
      color = "#E9695B";
      break;
  }

  return color as GoalColor;
};

function _isFirstColor(index: number): boolean {
  if (index === 0 || index % 4 === 0) return true;

  return false;
}

function _findColorToRender(index: number): number {
  return index % 4;
}

const getColorForPrioBucket = (
  goalColor: GoalColor,
  prio: PriorityTier,
): PriorityBucketColor | "#FEFEF8" => {
  let color;
  switch (goalColor) {
    case "#E9695B":
      color = _findColorShadeForFirstColor(prio);
      break;
    case "#84C5E8":
      color = _findColorShadeForSecondColor(prio);
      break;
    case "#1C88BA":
      color = _findColorShadeForThirdColor(prio);
      break;
    case "#F0B541":
      color = _findColorShadeForFourthColor(prio);
      break;
    default:
      color = "#FEFEF8";
      break;
  }
  return color as PriorityBucketColor;
};

function _findColorShadeForFirstColor(
  prio: PriorityTier,
): ColorShadeForFirstGoalColor | "#FEFEF8" {
  let color;
  switch (prio) {
    case "highest":
      color = "#C2571A";
      break;
    case "high":
      color = "#DA621E";
      break;
    case "mid":
      color = "#F26D21";
      break;
    case "low":
      color = "#F58B4C";
      break;
    default:
      color = "#FEFEF8";
      break;
  }
  return color as ColorShadeForFirstGoalColor;
}

function _findColorShadeForSecondColor(
  prio: PriorityTier,
): ColorShadeForSecondGoalColor | "#FEFEF8" {
  let color;
  switch (prio) {
    case "highest":
      color = "#107896";
      break;
    case "high":
      color = "#0D9BC3";
      break;
    case "mid":
      color = "#2FAFD3";
      break;
    case "low":
      color = "#65CBE9";
      break;
    default:
      color = "#FEFEF8";
      break;
  }
  return color as ColorShadeForSecondGoalColor;
}

function _findColorShadeForThirdColor(
  prio: PriorityTier,
): ColorShadeForThirdGoalColor | "#FEFEF8" {
  let color;
  switch (prio) {
    case "highest":
      color = "#093145";
      break;
    case "high":
      color = "#0D3D56";
      break;
    case "mid":
      color = "#0D5275";
      break;
    case "low":
      color = "#3C6478";
      break;
    default:
      color = "#FEFEF8";
      break;
  }
  return color as ColorShadeForThirdGoalColor;
}

function _findColorShadeForFourthColor(
  prio: PriorityTier,
): ColorShadeForFourthGoalColor | "#FEFEF8" {
  let color;
  switch (prio) {
    case "highest":
      color = "#BCA136";
      break;
    case "high":
      color = "#D3B53D";
      break;
    case "mid":
      color = "#EBC944";
      break;
    case "low":
      color = "#EFD469";
      break;
    default:
      color = "#FEFEF8";
      break;
  }
  return color as ColorShadeForFourthGoalColor;
}

export default { assignColorForGoal, getColorForPrioBucket };
