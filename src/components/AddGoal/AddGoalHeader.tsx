import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { CloseIcon } from "../shared";

import { Container, Typography } from "../../styles";

type AddGoalHeaderProps = {
  backBtnHandler: () => void;
};

const AddGoalHeader: React.FC<AddGoalHeaderProps> = ({
  backBtnHandler,
}: AddGoalHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.closeIconWrapper}>
        <CloseIcon pressHandler={backBtnHandler} />
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{`New Goal`}</Text>
        <Image
          style={styles.rocketImage}
          source={require(`../../../assets/images/rocket_1f680.png`)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: "0.2%",
    paddingBottom: "0.5%",
    ...Container.flexStart,
  },
  closeIconWrapper: {
    paddingLeft: "10%",
    paddingTop: 0,
  },
  headerWrapper: {
    ...Container.flexStart,
    paddingTop: "37.5%",
    paddingLeft: "4.5%",
  },
  rocketImage: {
    width: 28,
    height: 28,
  },
  headerText: {
    ...Typography.h1,
    fontSize: 22,
    paddingRight: 12,
  },
});

export default AddGoalHeader;
