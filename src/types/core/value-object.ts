export type PriorityTier = "n/a" | "highest" | "high" | "mid" | "low";

export type PriorityMeasure = "n/a" | "yes" | "no"; // TODO: consider to use MIXED type (boolean and null) instead?

export type PriorityBucketColor =
  | ColorShadeForFirstGoalColor
  | ColorShadeForSecondGoalColor
  | ColorShadeForThirdGoalColor
  | ColorShadeForFourthGoalColor;

export type ColorShadeForFirstGoalColor =
  | "#C2571A"
  | "#DA621E"
  | "#F26D21"
  | "#F58B4C";
export type ColorShadeForSecondGoalColor =
  | "#107896"
  | "#0D9BC3"
  | "#2FAFD3"
  | "#65CBE9";
export type ColorShadeForThirdGoalColor =
  | "#093145"
  | "#0D3D56"
  | "#0D5275"
  | "#3C6478";
export type ColorShadeForFourthGoalColor =
  | "#BCA136"
  | "#D3B53D"
  | "#EBC944"
  | "#EFD469";

export class Priority {
  constructor(
    public tier: PriorityTier,
    public importance: PriorityMeasure,
    public urgency: PriorityMeasure,
  ) {}
}
