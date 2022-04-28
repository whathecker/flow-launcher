import React from "react";
import { StyleSheet, Image } from "react-native";
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
    width: 36,
    height: 36,
  },
  headerText: {
    ...Typography.h4,
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  subHeaderText: {
    ...Typography.p,
    fontSize: 14,
  },
});

export default PriorIntroHeader;
