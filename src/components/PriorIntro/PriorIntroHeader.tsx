import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { View, Text } from "../Themed";
import { CloseIcon } from "../shared";
import { Container, Typography } from "../../styles";
import { navigationRef } from "../../utils";

const PriorIntroHeader: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeIconAreaWrapper}>
        <CloseIcon pressHandler={() => navigationRef.goBack()} />
      </View>
      <View style={styles.headerAreaWrapper}>
        <Image
          style={styles.headerImage}
          source={require(`../../../assets/images/bar-chart_1f4ca.png`)}
        />
        <Text style={styles.headerText}>{`Let’s Prioritize Tasks`}</Text>
        <Text
          style={styles.subHeaderText}
        >{`We will ask two questions for each task`}</Text>
      </View>
    </View>
  );
};

const screen = Dimensions.get("screen");

function _getHeaderImageSize(width: number): number {
  if (width > 420) {
    return 42;
  } else {
    return 36;
  }
}

function _getHeaderTextSize(width: number): number {
  if (width > 420) {
    return 22;
  } else {
    return 20;
  }
}

function _getSubHeaderTextSize(width: number): number {
  if (width > 420) {
    return 16;
  } else {
    return 14;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    width: "95%",
  },
  closeIconAreaWrapper: {
    flex: 4,
    ...Container.flexStart,
    justifyContent: "flex-start",
    width: "90%",
    paddingTop: "2.5%",
    marginLeft: "4.5%",
    marginRight: "5%",
  },
  headerAreaWrapper: {
    ...Container.centerAlignedVertical,
    flex: 6,
    flexShrink: 1,
  },
  headerImage: {
    width: _getHeaderImageSize(screen.width),
    height: _getHeaderImageSize(screen.width),
  },
  headerText: {
    ...Typography.h4,
    fontSize: _getHeaderTextSize(screen.width),
    paddingTop: 10,
    paddingBottom: 5,
  },
  subHeaderText: {
    ...Typography.p,
    fontSize: _getSubHeaderTextSize(screen.width),
  },
});

export default PriorIntroHeader;
