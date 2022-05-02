import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { GoBackButton } from "../shared";
import { Container, Typography } from "../../styles";
import { navigationRef, shortenText } from "../../utils";

type PriorReviewHeaderProps = {
  title: string;
  tasksCount: number;
};

const PriorReviewHeader: React.FC<PriorReviewHeaderProps> = ({
  title,
  tasksCount,
}: PriorReviewHeaderProps) => {
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
        <Text style={styles.goalText}>{shortenText(title, 30)}</Text>
        <Text
          style={styles.taskCountText}
        >{`${tasksCount} tasks have been prioritised`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: "5%",
    paddingBottom: "2.5%",
  },
  goBackBtnAreaWrapper: {
    flex: 3,
    ...Container.flexStart,
    //height: "40%",
  },
  goBackBtnWrapper: {
    paddingLeft: "5.5%",
    paddingTop: 0,
  },
  headerAreaWrapper: {
    flex: 3,
    paddingLeft: "10%",
  },
  headerWrapper: {
    paddingTop: "2.5%",
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
    flex: 4,
    width: "90%",
    paddingLeft: "12%",
    marginTop: "8%",
    flexShrink: 1,
  },
  goalText: {
    flexShrink: 1,
    ...Typography.h4,
    fontSize: 18,
    paddingBottom: "8.5%",
  },
  taskCountText: {
    ...Typography.p,
    fontSize: 13,
  },
});

export default PriorReviewHeader;
