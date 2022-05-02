import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { Container } from "../styles";
import { StackActions } from "@react-navigation/native";
import { PrioIntroStackScreenProps } from "../types/navigation";

import { PriorIntroHeader, PriorExplanation } from "../components/PriorIntro";
import { Button } from "../components/shared";

type Props = PrioIntroStackScreenProps<"PriorizationIntro">;

const PriorIntroScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <PriorIntroHeader />
      </View>
      <View style={styles.explanationAreaWrapper}>
        <PriorExplanation />
      </View>
      <View style={styles.buttonWrapper}>
        <View style={{ width: "80%" }}>
          <Button
            ctaTxt="Start prioritizing!"
            pressHandler={() =>
              navigation.dispatch(StackActions.replace("Prior"))
            }
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.centerAlignedVertical,
    height: "26%",
  },
  explanationAreaWrapper: {
    ...Container.centerAlignedVertical,
    height: "46%",
    paddingTop: "15%",
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "30%",
  },
});

export default PriorIntroScreen;
