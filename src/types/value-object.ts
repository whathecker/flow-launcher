export type PriorityTier = "n/a" | "highest" | "high" | "mid" | "low";

export class Priority {
  constructor(
    public tier: PriorityTier,
    public importance: boolean,
    public urgency: boolean,
  ) {}
}
