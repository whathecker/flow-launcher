/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { CloseIcon } from "../shared";
import { Container, Typography } from "../../styles";
import { navigationRef, shortenText } from "../../utils";

type PriorHeaderProps = {
  title: string;
};

const PriorHeader: React.FC<PriorHeaderProps> = ({
  title,
}: PriorHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeIconAreaWrapper}>
        <View style={styles.closeIconWrapper}>
          <CloseIcon pressHandler={() => navigationRef.goBack()} />
        </View>
      </View>
      <View style={styles.headerAreaWrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>{`Prioritizing`}</Text>
          <Image
            style={styles.image}
            source={require(`../../../assets/images/bar-chart_1f4ca.png`)}
          />
        </View>
      </View>
      <View style={styles.goalAreaWrapper}>
        <Text style={styles.goalText}>{shortenText(title, 50)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: "6%",
    marginBottom: "10%",
  },
  closeIconAreaWrapper: {
    ...Container.flexStart,
    height: "8%",
  },
  closeIconWrapper: {
    paddingLeft: "5%",
    paddingTop: "12%",
    paddingBottom: "5%",
  },
  headerAreaWrapper: {
    marginTop: "10%",
    paddingLeft: "10%",
  },
  headerWrapper: {
    ...Container.flexStart,
    width: "100%",
  },
  headerText: {
    ...Typography.h4,
    fontSize: 20,
    paddingRight: "3%",
  },
  image: {
    width: 32,
    height: 32,
  },
  goalAreaWrapper: {
    width: "90%",
    paddingLeft: "10%",
    marginTop: "8%",
  },
  goalText: {
    ...Typography.h4,
    fontSize: 16,
    paddingBottom: "5%",
  },
  motivationText: {
    ...Typography.p,
    fontSize: 14,
  },
});

export default PriorHeader;
