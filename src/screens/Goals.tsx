import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Typography } from "../styles";

const GoalsScreen: React.FC = () => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Your Goals</Text>
      </View>
      <View style={styles.goalsAreaWrapper}>
        <Text>Emoji goes here</Text>
      </View>
      <View style={styles.buttonAreaWrapper}>
        <Button
          title="Add a Goal"
          onPress={() => {
            alert("Button pressed");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.flexStart,
    height: "10%",
    marginTop: 55,
    marginLeft: 40,
  },
  headerText: {
    ...Typography.h1,
  },
  goalsAreaWrapper: {
    ...Container.centerAligned,
    height: "70%",
    borderWidth: 2,
    borderColor: "black",
  },
  buttonAreaWrapper: {
    ...Container.centerAligned,
    height: "10%",
    marginTop: 15,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default GoalsScreen;
