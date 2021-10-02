import * as Realm from "realm";

const GoalSchema: Realm.ObjectSchema = {
  name: "Goal",
  properties: {
    _id: "objectId",
    title: "string",
    motivation: "string",
    reminder: "string",
  },
  primaryKey: "_id",
};

const PrioritySchema: Realm.ObjectSchema = {
  name: "Priority",
  embedded: true,
  properties: {
    tier: "string",
    importance: "bool",
    urgency: "bool",
  },
};

const TaskSchema: Realm.ObjectSchema = {
  name: "Task",
  properties: {
    title: "string",
    description: "string",
    status: "string",
    priority: "Priority?",
    _id: "objectId?",
  },
};

export { GoalSchema, PrioritySchema, TaskSchema };
