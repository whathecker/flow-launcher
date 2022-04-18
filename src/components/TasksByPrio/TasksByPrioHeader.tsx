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
    <View lightColor={backgroundColor} darkColor={backgroundColor}>
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
        <Text
          lightColor={Color.light.textOnColorForRead}
          darkColor={Color.dark.textOnColorForRead}
          style={styles.goalTitle}
        >
          {goalTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackBtnAreaWrapper: {
    marginTop: "13%",
    ...Container.flexStart,
  },
  goBackbtnWrapper: {
    paddingTop: "2.5%",
    paddingLeft: "8%",
  },
  labelAndTitleAreaWrapper: {
    paddingTop: "7%",
    paddingLeft: "12%",
  },
  prioLabelWrapper: {
    ...Container.flexStart,
    paddingBottom: "12%",
  },
  prioIconImg: {
    width: 32,
    height: 32,
  },
  prioLabel: {
    ...Typography.p,
    fontSize: 18,
    paddingLeft: "3.5%",
    paddingTop: "0.15%",
  },
  goalTitle: {
    ...Typography.h4,
    fontSize: 22,
    paddingBottom: "6%",
  },
});

export default TasksByPrioHeader;
