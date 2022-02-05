import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { Container, Typography } from "../styles";
import { PriorStackScreenProps } from "../types/navigation";

import { PriorIntroHeader } from "../components/PriorIntro";
import { Button } from "../components/shared";

type Props = PriorStackScreenProps<"PriorIntro">;

const PriorExplanation: React.FC = () => {
  return (
    <>
      <View
        style={{
          ...Container.flexStart,
          width: "70%",
          height: "50%",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <View style={{ width: "35%" }}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require(`../../assets/images/alarm-clock_23f0.png`)}
          />
        </View>
        <View style={{ width: "65%" }}>
          <Text
            style={{ ...Typography.h4, marginBottom: 6 }}
          >{`Is this task urgent?`}</Text>
          <Text style={{ ...Typography.p, fontSize: 16 }}>
            {`Answer ‘yes’ if there is any time pressure to finish the task.`}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...Container.flexStart,
          width: "70%",
          height: "50%",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View style={{ width: "35%" }}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require(`../../assets/images/exclamation-mark_2757.png`)}
          />
        </View>
        <View style={{ width: "65%" }}>
          <Text
            style={{ ...Typography.h4, marginBottom: 6 }}
          >{`Is this task important?`}</Text>
          <Text style={{ ...Typography.p, fontSize: 16 }}>
            {`Think twice, and mark ‘yes’ if the task is crucial to achieving your goal.`}
          </Text>
        </View>
      </View>
    </>
  );
};

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
