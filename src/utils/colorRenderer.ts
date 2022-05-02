import { GoalColor } from "../types/core/entity";

const assignColorForGoal = (index: number): GoalColor => {
  if (_isFirstColor(index)) return "#E9695B";

  let color;
  switch (_findColorToRender(index)) {
    case 1:
      color = "#42ABE3";
      break;
    case 2:
      color = "#F0B541";
      break;
    case 3:
      color = "#1C88BA";
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

export default { assignColorForGoal };
