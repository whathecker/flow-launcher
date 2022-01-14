import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { CloseIcon } from "../shared";
import { navigationRef } from "../../utils";
import { Container, Typography } from "../../styles";

type GoalDetailHeaderProps = {
  title: string;
  movitation: string;
};

const GoalDetailHeader: React.FC<GoalDetailHeaderProps> = ({
  title,
  movitation,
}: GoalDetailHeaderProps) => {
  return (
    <>
      <View
        style={{
          ...Container.flexStart,
          height: "55%",
        }}
      >
        <View style={styles.closeIconWrapper}>
          <CloseIcon
            pressHandler={() => {
              navigationRef.goBack();
            }}
          />
        </View>
      </View>
      <View style={{ paddingLeft: "8%" }}>
        <View style={styles.headerWrapper}>
          <Text style={styles.goalTitle}>{title}</Text>
          <Image
            style={styles.rocketImage}
            source={require(`../../../assets/images/rocket_1f680.png`)}
          />
        </View>
        <View style={styles.motivationWrapper}>
          <Text style={styles.motivationText}>{movitation}</Text>
        </View>
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
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
  },
  rocketImage: {
    width: 32,
    height: 32,
  },
  goalTitle: {
    ...Typography.h1,
    marginRight: 15,
  },
  motivationWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  motivationText: {
    ...Typography.p,
  },
});

export default GoalDetailHeader;
