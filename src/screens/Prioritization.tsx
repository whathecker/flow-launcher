import React from "react";
import { Button, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { PriorHeader } from "../components/Prioritization";
import { Container, Typography } from "../styles";
import { PriorStackScreenProps } from "../types/navigation";

type Props = PriorStackScreenProps<"Prioritization">;

const PrioritizationScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <PriorHeader />
      </View>
      <View style={styles.headerWrapper}>
        <Text>Title of the goal</Text>
      </View>
      <View style={styles.headerWrapper}>
        <Text>motivation of the goal</Text>
      </View>
      <View style={styles.inputAreaWrapper}>
        <Text>Input area</Text>
      </View>
      <View>
        <Button
          title="Go back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: "26%",
  },
  headerText: {
    ...Typography.h1,
  },
  inputAreaWrapper: {
    ...Container.centerAligned,
    height: "30%",
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
});

export default PrioritizationScreen;
