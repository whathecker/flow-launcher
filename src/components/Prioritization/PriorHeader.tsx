import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { CloseIcon } from "../shared";
import { Container, Typography } from "../../styles";
import { navigationRef } from "../../utils";

type PriorHeaderProps = {
  title: string;
  motivation: string;
};

const PriorHeader: React.FC<PriorHeaderProps> = ({
  title,
  motivation,
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
        <Text style={styles.goalText}>{title}</Text>
        <Text style={styles.motivationText}>{motivation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 15,
  },
  closeIconAreaWrapper: {
    ...Container.flexStart,
    height: "40%",
  },
  closeIconWrapper: {
    paddingLeft: 25,
    paddingTop: 0,
  },
  headerAreaWrapper: {
    paddingLeft: "10%",
  },
  headerWrapper: {
    ...Container.flexStart,
    width: "100%",
  },
  headerText: {
    ...Typography.h4,
    fontSize: 22,
    paddingRight: 10,
  },
  image: {
    width: 32,
    height: 32,
  },
  goalAreaWrapper: {
    paddingLeft: "10%",
    marginTop: "8%",
  },
  goalText: {
    ...Typography.h4,
    fontSize: 20,
    paddingBottom: 5,
  },
  motivationText: {
    ...Typography.p,
    fontSize: 14,
  },
});

export default PriorHeader;
