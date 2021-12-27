import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import Navigation from "./src/navigation";
import { openDatabase } from "./src/db/connection";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontLoaded] = useFonts({
    "EB-Garamond": require("./assets/fonts/EBGaramond-VariableFont_wght.ttf"),
    "Forum-Regular": require("./assets/fonts/Forum-Regular.ttf"),
  });

  useEffect(() => {
    (async function loadDatabase() {
      // TODO: this has to be changed to
      // something like loadCachedDB
      // and close database when it's done
      await openDatabase();
    })();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    );
  }
}
