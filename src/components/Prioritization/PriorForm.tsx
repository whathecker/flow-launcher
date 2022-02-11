/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../Themed";
import { TaskCounter } from "./components";
import { Button, RadioButton } from "../shared";
import { Container, Typography, Color } from "../../styles";
import { Task } from "../../types/core/entity";

type PriorFormProps = {
  tasks: Task[];
};

type TaskTitleProps = {
  title: string;
};

const TaskTitle: React.FC<TaskTitleProps> = ({ title }: TaskTitleProps) => {
  return (
    <>
      <Text style={{ ...Typography.p, fontSize: 20, color: Color.light.text }}>
        {title}
      </Text>
    </>
  );
};

const RadioBtnControl: React.FC = () => {
  return (
    <View
      style={{
        ...Container.flexStart,
        justifyContent: "space-between",
        width: "42%",
      }}
    >
      <RadioButton
        displayText="Yes"
        value="yes"
        activeValue="yes"
        pressHandler={() => console.log("Call the setState here!")}
      />
      <RadioButton
        displayText="No"
        value="no"
        activeValue="yes"
        pressHandler={() => console.log("Pressed!")}
      />
    </View>
  );
};

const PriorForm: React.FC<PriorFormProps> = ({ tasks }: PriorFormProps) => {
  const [activeTaskCounter, setActiveTaskCounter] = useState(0);
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View style={{ marginBottom: 10 }}>
          <TaskCounter
            currentTaskIndex={activeTaskCounter}
            totalTasksLength={tasks.length}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <TaskTitle title={tasks[activeTaskCounter].title} />
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
            <RadioBtnControl />
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
            <RadioBtnControl />
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
    height: "85%",
    borderColor: Color.light.defaultBorder,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  headerWrapper: {
    paddingTop: "10%",
    paddingLeft: "8%",
    height: "18%",
  },
  inputAreaWrapper: {
    paddingTop: "10%",
    paddingLeft: "8%",
    height: "65%",
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
