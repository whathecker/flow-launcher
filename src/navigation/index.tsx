import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GoalsScreen, PriorIntroScreen } from "../screens";

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

const RootStack = createNativeStackNavigator();
const GoalStack = createNativeStackNavigator();
const PriorStack = createNativeStackNavigator();

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

const GoalNav: React.FC = () => {
  return (
    <GoalStack.Navigator>
      <GoalStack.Screen
        name="Goals"
        options={{ headerShown: false }}
        component={GoalsScreen}
      />
    </GoalStack.Navigator>
  );
};

const PriorNav: React.FC = () => {
  return (
    <PriorStack.Navigator>
      <PriorStack.Screen
        name="PriorIntro"
        options={{ headerShown: false }}
        component={PriorIntroScreen}
      />
    </PriorStack.Navigator>
  );
};

export default Navigation;
