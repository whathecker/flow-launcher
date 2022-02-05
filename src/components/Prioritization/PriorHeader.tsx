import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { CloseIcon } from "../shared";
import { Container, Typography } from "../../styles";
import { navigationRef } from "../../utils";

const PriorHeader: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeIconAreaWrapper}>
        <View style={styles.closeIconWrapper}>
          <CloseIcon pressHandler={() => navigationRef.goBack()} />
        </View>
      </View>
      <View style={styles.headerAreaWrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>{`PRIORITIZING`}</Text>
          <Image
            style={styles.image}
            source={require(`../../../assets/images/bar-chart_1f4ca.png`)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 25,
  },
  closeIconAreaWrapper: {
    ...Container.flexStart,
    height: "60%",
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
    fontSize: 25,
    paddingRight: 10,
  },
  image: {
    width: 32,
    height: 32,
  },
});

export default PriorHeader;
