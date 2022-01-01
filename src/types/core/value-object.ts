export type PriorityTier = "n/a" | "highest" | "high" | "mid" | "low";

export type PriorityMeasure = "n/a" | "yes" | "no"; // TODO: consider to use MIXED type (boolean and null) instead?

export class Priority {
  constructor(
    public tier: PriorityTier,
    public importance: PriorityMeasure,
    public urgency: PriorityMeasure,
  ) {}
}
