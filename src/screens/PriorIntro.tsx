import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { Container } from "../styles";
import { PriorStackScreenProps } from "../types/navigation";

import { PriorIntroHeader, PriorExplanation } from "../components/PriorIntro";
import { Button } from "../components/shared";

type Props = PriorStackScreenProps<"PriorIntro">;

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
            pressHandler={() => navigation.navigate("Prioritization")}
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
    paddingTop: 100,
  },
  buttonWrapper: {
    ...Container.centerAligned,
    height: "30%",
  },
});

export default PriorIntroScreen;
