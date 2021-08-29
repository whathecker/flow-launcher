import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screen/Home";

const Navigation: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

const RootStack = createNativeStackNavigator();

const RootNav: React.FunctionComponent = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default Navigation;
