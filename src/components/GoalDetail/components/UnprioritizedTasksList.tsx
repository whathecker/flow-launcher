import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Touchable } from "../../Themed";
import UnprioritizedTask from "./UnprioritizedTask";
import { Container, Typography, Color } from "../../../styles";
import { Task } from "../../../types/core/entity";
import { navigationRef } from "../../../utils";

type UnprioritizedTasksProp = {
  tasks: Task[];
};

const UnprioritizedTasksList: React.FC<UnprioritizedTasksProp> = ({
  tasks,
}: UnprioritizedTasksProp) => {
  return (
    <View style={styles.wrapper}>
      {tasks[0] ? <UnprioritizedTask title={tasks[0].title} /> : null}
      {tasks[1] ? <UnprioritizedTask title={tasks[1].title} /> : null}
      {tasks[2] ? <UnprioritizedTask title={tasks[2].title} /> : null}
      {tasks.length > 3 ? (
        <View style={styles.moreTasksIndicatorWrapper}>
          <Text>{`...`}</Text>
        </View>
      ) : null}
      {tasks.length > 0 ? (
        <View style={styles.buttonAreaWrapper}>
          <Touchable>
            <Text style={styles.sellAllBtn}>{`See All (90)`}</Text>
          </Touchable>
          <Touchable
            onPress={() => {
              navigationRef.navigate("Prior");
            }}
          >
            <Text style={styles.prioritizeBtn}>{`Start Prioritizing`}</Text>
          </Touchable>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...Container.centerAlignedVertical,
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 15,
    marginBottom: 8,
  },
  moreTasksIndicatorWrapper: {
    marginTop: 5,
    marginBottom: 5,
  },
  buttonAreaWrapper: {
    ...Container.flexStart,
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 5,
  },
  prioritizeBtn: {
    ...Typography.p,
    textDecorationLine: "underline",
    color: Color.light.primaryBtn,
    fontSize: 18,
  },
  sellAllBtn: {
    ...Typography.p,
    textDecorationLine: "underline",
    color: Color.light.text,
    fontSize: 18,
  },
});

export default UnprioritizedTasksList;
