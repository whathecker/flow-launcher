import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { GoBackButton } from "../shared";
import { navigationRef, shortenText } from "../../utils";
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
    <View style={styles.wrapper}>
      <View
        style={{
          ...Container.flexStart,
          height: "55%",
        }}
      >
        <View style={styles.closeIconWrapper}>
          <GoBackButton
            pressHandler={() => {
              navigationRef.goBack();
            }}
          />
        </View>
      </View>
      <View style={{ width: "95%", paddingLeft: "10%", paddingBottom: "5%" }}>
        <View style={styles.headerWrapper}>
          <Text style={styles.goalTitle}>{shortenText(title, 50)}</Text>
          <Image
            style={styles.rocketImage}
            source={require(`../../../assets/images/rocket_1f680.png`)}
          />
        </View>
        <View style={styles.motivationWrapper}>
          <Text style={styles.motivationText}>
            {shortenText(movitation, 80)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: "2%",
    marginBottom: "6.5%",
    flexShrink: 1,
  },
  closeIconWrapper: {
    paddingLeft: "5%",
  },
  headerWrapper: {
    width: "90%",
    ...Container.flexStart,
    paddingBottom: "0.5%",
  },
  rocketImage: {
    width: 32,
    height: 32,
  },
  goalTitle: {
    ...Typography.h4,
    marginRight: "3%",
  },
  motivationWrapper: {
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
  },
  motivationText: {
    ...Typography.p,
    fontSize: 16,
  },
});

export default GoalDetailHeader;
