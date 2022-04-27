/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Image, Animated } from "react-native";
import { Touchable, View, Text } from "../Themed";
import { TaskCounter, TaskTitle } from "./components";
import { Button, RadioButton } from "../shared";
import { Container, Typography, Color } from "../../styles";

import { Task } from "../../types/core/entity";
import { PriorityMeasure } from "../../types/core/value-object";
import { taskManager, navigationRef } from "../../utils";

type PriorFormProps = {
  unprioritisedTasks: Task[];
};

const PriorForm: React.FC<PriorFormProps> = ({
  unprioritisedTasks,
}: PriorFormProps) => {
  const [activeTaskCounter, setActiveTaskCounter] = useState(0);
  const [activeTask, setActiveTask] = useState(
    unprioritisedTasks[activeTaskCounter],
  );
  const [importanceValue, setImportanceValue] = useState(
    activeTask.priority!.importance,
  );
  const [urgencyValue, setUrgencyValue] = useState(
    activeTask.priority!.urgency,
  );

  const shouldNextBtnInactive = (
    importanceVal: PriorityMeasure,
    urgencyVal: PriorityMeasure,
  ): boolean => {
    if (importanceVal === "n/a" || urgencyVal === "n/a") return true;
    else return false;
  };

  const updateUrgencyVal = (input: PriorityMeasure): void => {
    activeTask.priority!.urgency = input;
    setActiveTask(activeTask);
    setUrgencyValue(activeTask.priority!.urgency);
  };

  const updateImportanceVal = (input: PriorityMeasure): void => {
    activeTask.priority!.importance = input;
    setActiveTask(activeTask);
    setImportanceValue(activeTask.priority!.importance);
  };

  const renderNextTask = (): void => {
    if (activeTaskCounter < unprioritisedTasks.length - 1) {
      const nextCounter = activeTaskCounter + 1;
      setActiveTaskCounter(nextCounter);
      setActiveTask(unprioritisedTasks[nextCounter]);
      setUrgencyValue(unprioritisedTasks[nextCounter].priority!.urgency);
      setImportanceValue(unprioritisedTasks[nextCounter].priority!.importance);
    }
  };

  const renderPrevTask = (): void => {
    const prevCounter = activeTaskCounter - 1;
    setActiveTaskCounter(prevCounter);
    setActiveTask(unprioritisedTasks[prevCounter]);
    setUrgencyValue(unprioritisedTasks[prevCounter].priority!.urgency);
    setImportanceValue(unprioritisedTasks[prevCounter].priority!.importance);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start();
  }, []);

  const dimElements = (): void => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.05,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.headerWrapper, { opacity: fadeAnim }]}>
        <View style={{ marginBottom: 10 }}>
          <TaskCounter
            currentTaskIndex={activeTaskCounter}
            totalTasksLength={unprioritisedTasks.length}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <TaskTitle title={activeTask.title} />
        </View>
      </Animated.View>
      <View style={styles.inputAreaWrapper}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputImageWrapper}>
            <Image
              style={styles.image}
              source={require(`../../../assets/images/alarm-clock_23f0.png`)}
            />
          </View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text
              lightColor={Color.light.labelOnBackgroundForRead}
              darkColor={Color.light.labelOnBackgroundForRead}
              style={styles.inputLabel}
            >{`Is this task urgent?`}</Text>
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
                activeValue={urgencyValue}
                pressHandler={() => updateUrgencyVal("yes")}
              />
              <RadioButton
                displayText="No"
                value="no"
                activeValue={urgencyValue}
                pressHandler={() => updateUrgencyVal("no")}
              />
            </View>
          </Animated.View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputImageWrapper}>
            <Image
              style={styles.image}
              source={require(`../../../assets/images/exclamation-mark_2757.png`)}
            />
          </View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text
              lightColor={Color.light.labelOnBackgroundForRead}
              darkColor={Color.dark.labelOnBackgroundForRead}
              style={styles.inputLabel}
            >{`Is this task important?`}</Text>
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
                activeValue={importanceValue}
                pressHandler={() => updateImportanceVal("yes")}
              />
              <RadioButton
                displayText="No"
                value="no"
                activeValue={importanceValue}
                pressHandler={() => updateImportanceVal("no")}
              />
            </View>
          </Animated.View>
        </View>
      </View>
      <View style={styles.buttonAreaWrapper}>
        {activeTaskCounter > 0 ? (
          <Touchable
            style={styles.prevButtonWrapper}
            onPress={() => {
              renderPrevTask();
              dimElements();
            }}
          >
            <Image
              style={styles.prevArrowIcon}
              source={require(`../../../assets/images/prev-arrow-blk.png`)}
            />
            <Text style={styles.prevButtonText}>{`Previously`}</Text>
          </Touchable>
        ) : (
          <View></View>
        )}
        <View style={styles.nextButtonWrapper}>
          {activeTaskCounter === unprioritisedTasks.length - 1 ? (
            <Button
              ctaTxt="Review Result"
              disable={shouldNextBtnInactive(importanceValue, urgencyValue)}
              pressHandler={() => {
                const result =
                  taskManager.checkTasksReadinessForPriorReview(
                    unprioritisedTasks,
                  );
                if (result) {
                  navigationRef.navigate("PriorReview", {
                    tasks: unprioritisedTasks,
                  });
                }
              }}
            />
          ) : (
            <Button
              ctaTxt="Next"
              disable={shouldNextBtnInactive(importanceValue, urgencyValue)}
              pressHandler={() => {
                renderNextTask();
                dimElements();
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    width: "85%",
    borderColor: Color.light.defaultBorder,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  headerWrapper: {
    flex: 2,
    width: "95%",
    marginTop: "8%",
    paddingLeft: "8%",
  },
  inputAreaWrapper: {
    flex: 6,
    marginTop: "2.5%",
    marginBottom: "2.5%",
    paddingLeft: "8%",
  },
  inputWrapper: {
    ...Container.flexStart,
    width: "80%",
    marginTop: "2.5%",
    marginBottom: "2%",
  },
  inputImageWrapper: {
    width: "35%",
  },
  inputLabel: {
    ...Typography.h4,
    fontSize: 15,
    marginBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
  buttonAreaWrapper: {
    flex: 2,
    ...Container.flexStart,
    justifyContent: "space-between",
    marginBottom: "3%",
  },
  prevButtonWrapper: {
    ...Container.flexStart,
    justifyContent: "flex-start",
    paddingLeft: 33,
  },
  prevArrowIcon: {
    width: 22,
    height: 22,
  },
  prevButtonText: {
    ...Typography.p,
    fontSize: 14,
    textDecorationLine: "underline",
    paddingLeft: 10,
  },
  nextButtonWrapper: {
    width: "45%",
    paddingRight: 15,
  },
});

export default PriorForm;
