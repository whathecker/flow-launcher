class PriorityModel {
  constructor(
    public tier: string,
    public importance: boolean,
    public urgency: boolean,
  ) {}
  public static schema: Realm.ObjectSchema = {
    name: "Priority",
    embedded: true,
    properties: {
      tier: "string",
      importance: "bool",
      urgency: "bool",
    },
  };
}

export default PriorityModel;
