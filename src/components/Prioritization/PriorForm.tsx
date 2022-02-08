/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { Button } from "../shared";
import { Container, Typography, Color } from "../../styles";

import { Task } from "../../types/core/entity";

type PriorFormProps = {
  tasks: Task[];
};

const TaskCounter: React.FC = () => {
  return (
    <>
      <Text
        style={{
          ...Typography.p,
          fontSize: 18,
          color: Color.light.subtleLabel,
        }}
      >{`Task (1 of 2)`}</Text>
    </>
  );
};

const TaskTitle: React.FC = () => {
  return (
    <>
      <Text style={{ ...Typography.p, fontSize: 20, color: Color.light.text }}>
        {"Reserch the driving school"}
      </Text>
    </>
  );
};

const PriorForm: React.FC<PriorFormProps> = ({ tasks }: PriorFormProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View style={{ marginBottom: 20 }}>
          <TaskCounter />
        </View>
        <View style={{ marginBottom: 20 }}>
          <TaskTitle />
        </View>
      </View>
      <View style={styles.inputAreaWrapper}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputImageWrapper}>
            <Image
              style={styles.image}
              source={require(`../../../assets/images/alarm-clock_23f0.png`)}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>{`Is this task urgent?`}</Text>
            <Text>{`Put the radio buttons here`}</Text>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputImageWrapper}>
            <Image
              style={styles.image}
              source={require(`../../../assets/images/exclamation-mark_2757.png`)}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>{`Is this task urgent?`}</Text>
            <Text>{`Put the radio buttons here`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonAreaWrapper}>
        <View style={styles.buttonWrapper}>
          <Button ctaTxt="Next" pressHandler={() => console.log("pressed")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "80%",
    height: "75%",
    borderColor: Color.light.defaultBorder,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  headerWrapper: {
    paddingTop: "10%",
    paddingLeft: "8%",
    height: "28%",
  },
  inputAreaWrapper: {
    paddingTop: "10%",
    paddingLeft: "8%",
    height: "55%",
  },
  inputWrapper: {
    ...Container.flexStart,
    width: "80%",
    marginTop: 10,
    marginBottom: 20,
  },
  inputImageWrapper: {
    width: "35%",
  },
  inputLabel: {
    ...Typography.h4,
    marginBottom: 15,
  },
  image: {
    width: 60,
    height: 60,
  },
  buttonAreaWrapper: {
    ...Container.flexStart,
    justifyContent: "flex-end",
  },
  buttonWrapper: {
    width: "45%",
    paddingRight: 15,
  },
});

export default PriorForm;
