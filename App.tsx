import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import Navigation from "./src/navigation";
import { openDatabase } from "./src/db/connection";

export default function App() {
  useEffect(() => {
    (async function loadDatabase() {
      await openDatabase();
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
