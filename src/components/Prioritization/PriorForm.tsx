/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Touchable, View, Text } from "../Themed";
import { TaskCounter, TaskTitle } from "./components";
import { Button, RadioButton } from "../shared";
import { Container, Typography, Color } from "../../styles";

import { Task } from "../../types/core/entity";
import { PriorityMeasure } from "../../types/core/value-object";
import { taskFilters } from "../../utils";

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

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View style={{ marginBottom: 10 }}>
          <TaskCounter
            currentTaskIndex={activeTaskCounter}
            totalTasksLength={unprioritisedTasks.length}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <TaskTitle title={activeTask.title} />
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
            <Text style={styles.inputLabel}>{`Is this task important?`}</Text>
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
          </View>
        </View>
      </View>
      <View style={styles.buttonAreaWrapper}>
        {activeTaskCounter > 0 ? (
          <Touchable
            style={styles.prevButtonWrapper}
            onPress={() => renderPrevTask()}
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
                  taskFilters.checkTasksReadinessForPriorReview(
                    unprioritisedTasks,
                  );
                console.log(result);
                // send user to next page with tasks as a prop
              }}
            />
          ) : (
            <Button
              ctaTxt="Next"
              disable={shouldNextBtnInactive(importanceValue, urgencyValue)}
              pressHandler={() => renderNextTask()}
            />
          )}
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
    justifyContent: "space-between",
  },
  prevButtonWrapper: {
    ...Container.flexStart,
    justifyContent: "flex-start",
    paddingLeft: 33,
  },
  prevArrowIcon: {
    width: 20,
    height: 20,
  },
  prevButtonText: {
    ...Typography.p,
    fontSize: 16,
    textDecorationLine: "underline",
    paddingLeft: 5,
  },
  nextButtonWrapper: {
    width: "45%",
    paddingRight: 15,
  },
});

export default PriorForm;
