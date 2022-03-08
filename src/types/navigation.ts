import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Goal, GoalColor, Task } from "./core/entity";
import { PriorityTier } from "./core/value-object";

export type RootStackParamList = {
  Goal: NavigatorScreenParams<GoalStackParamList> | undefined;
  Prior: NavigatorScreenParams<PriorStackParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type GoalStackParamList = {
  Goals: undefined;
  AddGoal: undefined;
  GoalDetail: { goal: Goal; goalColor: GoalColor };
  TasksByPrio: { prio: PriorityTier; tasks: Task[]; backgroundColor: string };
};

export type GoalStackScreenProps<Screen extends keyof GoalStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<GoalStackParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type PriorStackParamList = {
  PriorIntro: undefined;
  Prioritization: undefined;
  PriorReview: { tasks: Task[] };
};

export type PriorStackScreenProps<Screen extends keyof PriorStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<PriorStackParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
