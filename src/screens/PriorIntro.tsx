import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Typography } from "../styles";
import { PriorStackScreenProps } from "../types/navigation";

type Props = PriorStackScreenProps<"PriorIntro">;

const PriorIntroScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>
          Hello, This is your PriorIntro screen
        </Text>
      </View>
      <View style={styles.explanationAreaWrapper}>
        <Text>Explain what we are going to do here</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Let's start prioritization"
          onPress={() => {
            navigation.navigate("Prioritization");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.centerAligned,
    height: "10%",
  },
  headerText: {
    ...Typography.h1,
  },
  explanationAreaWrapper: {
    ...Container.centerAligned,
    height: "30%",
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
});

export default PriorIntroScreen;