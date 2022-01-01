/* eslint-disable no-console */
import React, { useContext } from "react";
import { GoalsContext } from "../../contexts/goals";
import { Keyboard, TextInput, StyleSheet } from "react-native";
import { View, TouchableWithoutFeedback } from "../Themed";
import {
  AddGoalFormLabel,
  AddGoalRadioOption,
  AddGoalErrMsg,
} from "./components";
import { Button } from "../shared";
import { Container, Typography } from "../../styles";

import { IAddGoalInput } from "../../types/entity";
import { Formik } from "formik";
import * as Yup from "yup";

const ValidationScheme = Yup.object().shape({
  title: Yup.string().required("Required"),
  motivation: Yup.string().required("Required"),
  reminder: Yup.string().required("Please select one of the options"),
});

const AddGoalForm: React.FC = () => {
  const { addGoal } = useContext(GoalsContext);
  return (
    <Formik
      initialValues={
        { title: "", motivation: "", reminder: "" } as IAddGoalInput
      }
      validationSchema={ValidationScheme}
      onSubmit={async (values) => {
        try {
          await addGoal(values);
        } catch (error) {
          // TODO: handle error here
          console.error(error);
        }
      }}
    >
      {({
        handleChange,
        setFieldValue,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <View style={styles.goalTitleInputWrapper}>
              <TextInput
                style={styles.goalTitleInput}
                multiline
                onChangeText={handleChange("title")}
                placeholder={`Write your goal in a sentence`}
                placeholderTextColor={"#848484"}
                value={values.title}
              />
              {touched.title && errors.title && (
                <AddGoalErrMsg msg={errors.title} />
              )}
            </View>

            <View style={styles.movitationInputWrapper}>
              <AddGoalFormLabel text="Movivation" type="motivation" />
              <TextInput
                style={styles.motivationInput}
                multiline
                onChangeText={handleChange("motivation")}
                placeholder={`Write down why you want to achieve this goal`}
                placeholderTextColor={"#848484"}
                value={values.motivation}
              />
              {touched.motivation && errors.motivation && (
                <AddGoalErrMsg msg={errors.motivation} />
              )}
            </View>
            <View style={styles.reminderInputWrapper}>
              <AddGoalFormLabel text="Reminder" type="reminder" />
              <View style={styles.reminderRadioOptionsWrapper}>
                <AddGoalRadioOption
                  displayText="Every Day"
                  name="daily"
                  activeValue={values.reminder}
                  pressHandler={() => {
                    setFieldValue("reminder", "daily");
                  }}
                />
                <AddGoalRadioOption
                  displayText="Every 3 Days"
                  name="three_days"
                  activeValue={values.reminder}
                  pressHandler={() => {
                    setFieldValue("reminder", "three_days");
                  }}
                />
                <AddGoalRadioOption
                  displayText="Every Week"
                  name="seven_days"
                  activeValue={values.reminder}
                  pressHandler={() => {
                    setFieldValue("reminder", "seven_days");
                  }}
                />
                {touched.reminder && errors.reminder && (
                  <AddGoalErrMsg msg={errors.reminder} />
                )}
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <Button ctaTxt={"Add goal"} pressHandler={handleSubmit} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  goalTitleInputWrapper: {
    paddingTop: 70,
    paddingLeft: 60,
    paddingBottom: 70,
  },
  goalTitleInput: {
    ...Typography.h1,
  },
  movitationInputWrapper: {
    paddingLeft: 60,
    paddingBottom: 50,
  },
  motivationInput: {
    ...Typography.p,
    paddingTop: 2,
    paddingBottom: 10,
  },
  reminderInputWrapper: {
    paddingLeft: 55,
    paddingBottom: 30,
  },
  reminderRadioOptionsWrapper: {
    paddingTop: 18,
    width: "80%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  buttonWrapper: {
    ...Container.centerAligned,
    flex: 1,
    width: "85%",
    marginLeft: "7.5%",
    marginRight: "7.5%",
  },
});

export default AddGoalForm;
