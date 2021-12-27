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
    <>
      <View style={styles.closeIconWrapper}>
        <CloseIcon pressHandler={backBtnHandler} />
      </View>
      <View style={styles.headerWrapper}>
        <Text
          style={styles.headerText}
          lightColor="#554F4F"
          darkColor="#554F4F"
        >
          {`New Goal`}
        </Text>
        <Image
          style={styles.rocketImage}
          source={require(`../../../assets/images/rocket_1f680.png`)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  closeIconWrapper: {
    paddingLeft: 25,
    paddingTop: 0,
  },
  headerWrapper: {
    ...Container.flexStart,
    paddingLeft: 15,
    paddingTop: 80,
  },
  rocketImage: {
    width: 32,
    height: 32,
  },
  headerText: {
    ...Typography.h1,
    paddingRight: 12,
  },
});

export default AddGoalHeader;
