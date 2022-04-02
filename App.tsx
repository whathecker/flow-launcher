import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { GoalsContextProvider } from "./src/contexts/goals";
import { TasksContextProvider } from "./src/contexts/tasks";

export default function App() {
  const [fontLoaded] = useFonts({
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
    "Lexend-SemiBold": require("./assets/fonts/Lexend-SemiBold.ttf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <GoalsContextProvider>
        <TasksContextProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </TasksContextProvider>
      </GoalsContextProvider>
    );
  }
}
