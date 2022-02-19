type GoalItemColor = "#E9695B" | "#84C5E8" | "#1C88BA" | "#F0B541";

const assignColorForGoal = (index: number): GoalItemColor => {
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

  return color as GoalItemColor;
};

function _isFirstColor(index: number): boolean {
  if (index === 0 || index % 4 === 0) return true;

  return false;
}

function _findColorToRender(index: number): number {
  return index % 4;
}

export default { assignColorForGoal };
