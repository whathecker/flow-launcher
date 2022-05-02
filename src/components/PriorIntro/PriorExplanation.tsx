import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { View, Text } from "../Themed";
import { Container, Typography } from "../../styles";

const PriorExplanation: React.FC = () => {
  return (
    <View>
      <View style={styles.explanationBlockWrapper}>
        <View style={styles.imageAreaWrapper}>
          <Image
            style={styles.image}
            source={require(`../../../assets/images/alarm-clock_23f0.png`)}
          />
        </View>
        <View style={styles.instructionAreaWrapper}>
          <Text style={styles.instructionHeader}>{`Is this task urgent?`}</Text>
          <Text style={styles.instructionSubHeader}>
            {`Answer ‘yes’ if there is any time pressure to finish the task.`}
          </Text>
        </View>
      </View>
      <View style={styles.explanationBlockWrapper}>
        <View style={styles.imageAreaWrapper}>
          <Image
            style={styles.image}
            source={require(`../../../assets/images/exclamation-mark_2757.png`)}
          />
        </View>
        <View style={styles.instructionAreaWrapper}>
          <Text
            style={styles.instructionHeader}
          >{`Is this task important?`}</Text>
          <Text style={styles.instructionSubHeader}>
            {`Think twice, and mark ‘yes’ if the task is crucial to achieving your goal.`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const screen = Dimensions.get("screen");

function _getImageSize(width: number): number {
  if (width > 420) {
    return 60;
  } else {
    return 52;
  }
}

function _getHeaderTextSize(width: number): number {
  if (width > 420) {
    return 18;
  } else {
    return 16;
  }
}

function _getSubHeaderTextSize(width: number): number {
  if (width > 420) {
    return 15;
  } else {
    return 13;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  explanationBlockWrapper: {
    flex: 5,
    ...Container.flexStart,
    width: "70%",
    marginTop: 5,
    marginBottom: 5,
  },
  imageAreaWrapper: {
    width: "30%",
  },
  image: {
    width: _getImageSize(screen.width),
    height: _getImageSize(screen.width),
  },
  instructionAreaWrapper: {
    width: "70%",
  },
  instructionHeader: {
    ...Typography.h4,
    fontSize: _getHeaderTextSize(screen.width),
    marginBottom: 6,
  },
  instructionSubHeader: {
    ...Typography.p,
    fontSize: _getSubHeaderTextSize(screen.width),
  },
});

export default PriorExplanation;
