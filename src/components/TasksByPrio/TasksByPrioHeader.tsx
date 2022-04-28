import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import {
  GoBackButtonWhite,
  HighestPrioIcon,
  HighPrioIcon,
  MidPrioIcon,
  LowPrioIcon,
} from "../shared";
import { Container, Typography, Color } from "../../styles";
import { navigationRef } from "../../utils";
import { PriorityTier } from "../../types/core/value-object";

type TasksByPrioHeaderProps = {
  prio: PriorityTier;
  goalTitle: string; // TODO: consider to use state from task context instead?
  label: string;
  backgroundColor: string;
};

//TODO: consider to use default View for the nested one?
const TasksByPrioHeader: React.FC<TasksByPrioHeaderProps> = ({
  prio,
  goalTitle,
  label,
  backgroundColor,
}: TasksByPrioHeaderProps) => {
  return (
    <View
      style={styles.wrapper}
      lightColor={backgroundColor}
      darkColor={backgroundColor}
    >
      <View
        lightColor={backgroundColor}
        darkColor={backgroundColor}
        style={styles.goBackBtnAreaWrapper}
      >
        <View
          lightColor={backgroundColor}
          darkColor={backgroundColor}
          style={styles.goBackbtnWrapper}
        >
          <GoBackButtonWhite
            backgroundColor={backgroundColor}
            pressHandler={() => navigationRef.goBack()}
          />
        </View>
      </View>
      <View
        lightColor={backgroundColor}
        darkColor={backgroundColor}
        style={styles.labelAndTitleAreaWrapper}
      >
        <View
          lightColor={backgroundColor}
          darkColor={backgroundColor}
          style={styles.prioLabelWrapper}
        >
          {prio === "highest" ? (
            <HighestPrioIcon style={styles.prioIconImg} />
          ) : null}
          {prio === "high" ? <HighPrioIcon style={styles.prioIconImg} /> : null}
          {prio === "mid" ? <MidPrioIcon style={styles.prioIconImg} /> : null}
          {prio === "low" ? <LowPrioIcon style={styles.prioIconImg} /> : null}
          <Text
            lightColor={Color.light.textOnColorForRead}
            darkColor={Color.dark.textOnColorForRead}
            style={styles.prioLabel}
          >
            {label}
          </Text>
        </View>
        <View
          style={styles.goalTitleWrapper}
          lightColor={backgroundColor}
          darkColor={backgroundColor}
        >
          <Text
            lightColor={Color.light.textOnColorForRead}
            darkColor={Color.dark.textOnColorForRead}
            style={styles.goalTitle}
          >
            {goalTitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    flexShrink: 1,
  },
  goBackBtnAreaWrapper: {
    flex: 4,
    ...Container.flexStart,
    paddingTop: "4%",
  },
  goBackbtnWrapper: {
    paddingLeft: "5.5%",
  },
  labelAndTitleAreaWrapper: {
    flex: 6,
    paddingLeft: "11%",
  },
  prioLabelWrapper: {
    flex: 5,
    flexShrink: 1,
    ...Container.flexStart,
    paddingBottom: "2.5%",
  },
  prioIconImg: {
    width: 28,
    height: 28,
  },
  prioLabel: {
    ...Typography.p,
    fontSize: 16,
    paddingLeft: "3.5%",
    paddingTop: "0.15%",
  },
  goalTitleWrapper: {
    flex: 5,
    ...Container.flexStart,
    width: "90%",
  },
  goalTitle: {
    ...Typography.h4,
    fontSize: 20,
    paddingBottom: "5%",
  },
});

export default TasksByPrioHeader;
