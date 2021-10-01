import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import Navigation from "./src/navigation";
import Realm from "realm";


async function openDatabase() {
  const Cat = {
    name: "Cat",
    properties: {
      _id: "objectId",
      name: "string",
      age: "int",
      type: "string",
    },
  };
  // open a local realm with the 'Cat' schema
  const realm = await Realm.open({
    schema: [Cat],
  });

  console.log(realm);
}

export default function App() {

  useEffect(() => {
    openDatabase();
  }, []);

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
