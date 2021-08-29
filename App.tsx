import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from "react";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation/>
    </SafeAreaProvider>
  );
}
