class PriorityModel {
  constructor(
    public tier: string,
    public importance: string,
    public urgency: string,
  ) {}
  public static schema: Realm.ObjectSchema = {
    name: "Priority",
    embedded: true,
    properties: {
      tier: { type: "string", default: "n/a" },
      importance: { type: "string", default: "n/a" }, // TODO: consider to use MIXED type instead of string?
      urgency: { type: "string", default: "n/a" },
    },
  };
}

export default PriorityModel;
