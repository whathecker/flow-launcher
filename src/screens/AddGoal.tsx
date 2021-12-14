import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { Button, CloseIcon } from "../components";

import { Container, Typography } from "../styles";

import { GoalStackScreenProps } from "../types/navigation";

type Props = GoalStackScreenProps<"AddGoal">;

const AddGoalScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.closeIconWrapper}>
        <CloseIcon
          pressHandler={() => {
            navigation.goBack();
          }}
        />
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
          source={require(`../../assets/images/rocket_1f680.png`)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text>Title Input goes here</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Motivation input goes here</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text>Reminder input goes here</Text>
      </View>
      <View style={styles.buttonAreaWrapper}>
        <View style={styles.buttonWrapper}>
          <Button
            ctaTxt="Add Goal"
            pressHandler={() => {
              //TODO: replace below with the database call
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  closeIconWrapper: {
    ...Container.flexStart,
    height: "6%",
    paddingLeft: 25,
    paddingTop: 20,
  },
  headerWrapper: {
    ...Container.flexStart,
    height: "14%",
    paddingLeft: 48,
    paddingBottom: 15,
  },
  rocketImage: {
    width: 32,
    height: 32,
  },
  inputWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
  headerText: {
    ...Typography.h1,
    paddingRight: 12,
  },
  buttonAreaWrapper: {
    ...Container.centerAligned,
    height: "20%",
  },
  buttonWrapper: {
    width: "90%",
  },
});

export default AddGoalScreen;
