import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  GoalsScreen,
  AddGoalScreen,
  GoalDetailScreen,
  PriorIntroScreen,
  PrioritizationScreen,
  PriorReviewScreen,
} from "../screens";
import {
  RootStackParamList,
  GoalStackParamList,
  PriorStackParamList,
} from "../types/navigation";
import { navigationRef } from "../utils";

const Navigation: React.FC = () => {
  return (
    <NavigationContainer
      ref={(navigator) => {
        const nav = navigator as NavigationContainerRef<RootStackParamList>;
        navigationRef.setNavigator(nav);
      }}
    >
      <RootNav />
    </NavigationContainer>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNav: React.FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
      initialRouteName="Goal"
    >
      <RootStack.Screen name="Goal" component={GoalNav} />
      <RootStack.Screen name="Prior" component={PriorNav} />
    </RootStack.Navigator>
  );
};

const GoalStack = createNativeStackNavigator<GoalStackParamList>();

const GoalNav: React.FC = () => {
  return (
    <GoalStack.Navigator>
      <GoalStack.Screen
        name="Goals"
        options={{ headerShown: false }}
        component={GoalsScreen}
      />
      <GoalStack.Screen
        name="AddGoal"
        options={{ presentation: "modal", headerShown: false }}
        component={AddGoalScreen}
      />
      <GoalStack.Screen
        name="GoalDetail"
        options={{ headerShown: false }}
        component={GoalDetailScreen}
      />
    </GoalStack.Navigator>
  );
};

const PriorStack = createNativeStackNavigator<PriorStackParamList>();

const PriorNav: React.FC = () => {
  return (
    <PriorStack.Navigator>
      <PriorStack.Screen
        name="PriorIntro"
        options={{ headerShown: false }}
        component={PriorIntroScreen}
      />
      <PriorStack.Screen
        name="Prioritization"
        options={{ headerShown: false }}
        component={PrioritizationScreen}
      />
      <PriorStack.Screen
        name="PriorReview"
        options={{ headerShown: false }}
        component={PriorReviewScreen}
      />
    </PriorStack.Navigator>
  );
};

export default Navigation;
