import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { GoBackButton } from "../shared";
import { Container, Typography } from "../../styles";
import { navigationRef } from "../../utils";

type PriorReviewHeaderProps = {
  title: string;
  tasksCount: number;
};

const PriorReviewHeader: React.FC<PriorReviewHeaderProps> = ({
  title,
  tasksCount,
}: PriorReviewHeaderProps) => {
  const _trimTitle = (input: string): string => {
    if (input.length >= 30) {
      return input.slice(0, 30) + "...";
    } else {
      return input;
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.goBackBtnAreaWrapper}>
        <View style={styles.goBackBtnWrapper}>
          <GoBackButton pressHandler={() => navigationRef.goBack()} />
        </View>
      </View>
      <View style={styles.headerAreaWrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>{`Review Priority`}</Text>
          <Image
            style={styles.image}
            source={require(`../../../assets/images/bar-chart_1f4ca.png`)}
          />
        </View>
      </View>
      <View style={styles.goalAreaWrapper}>
        <Text style={styles.goalText}>{_trimTitle(title)}</Text>
        <Text
          style={styles.taskCountText}
        >{`${tasksCount} tasks have been prioritised`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    flexShrink: 1,
  },
  goBackBtnAreaWrapper: {
    ...Container.flexStart,
    height: "40%",
  },
  goBackBtnWrapper: {
    paddingLeft: "5.5%",
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
    paddingRight: "3%",
  },
  image: {
    width: 32,
    height: 32,
  },
  goalAreaWrapper: {
    width: "90%",
    paddingLeft: "10%",
    marginTop: "6%",
    flexShrink: 1,
  },
  goalText: {
    flexShrink: 1,
    ...Typography.h4,
    fontSize: 20,
    paddingBottom: "3%",
  },
  taskCountText: {
    ...Typography.p,
    fontSize: 16,
  },
});

export default PriorReviewHeader;
