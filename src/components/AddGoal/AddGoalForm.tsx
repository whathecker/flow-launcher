/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Keyboard, TextInput, StyleSheet } from "react-native";
import { View, TouchableWithoutFeedback } from "../Themed";
import {
  AddGoalFormLabel,
  AddGoalRadioOption,
  AddGoalErrMsg,
} from "./components";
import { Button } from "../shared";

import { Container, Typography } from "../../styles";
import { Formik } from "formik";
import * as Yup from "yup";

type AddGoalFormProps = {
  submitHandler: () => void;
};

interface AddGoalFormValues {
  title: string;
  motivation: string;
  reminder: string;
}

const ValidationScheme = Yup.object().shape({
  title: Yup.string().required("Required"),
  motivation: Yup.string().required("Required"),
  reminder: Yup.string().required("Please select one of the options"),
});

const AddGoalForm: React.FC<AddGoalFormProps> = ({
  submitHandler,
}: AddGoalFormProps) => {
  return (
    <Formik
      initialValues={
        { title: "", motivation: "", reminder: "" } as AddGoalFormValues
      }
      validationSchema={ValidationScheme}
      onSubmit={(values) => console.log(values)}
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
              <View
                style={{
                  paddingTop: 30,
                  width: "80%",
                  marginLeft: "5%",
                  marginRight: "10%",
                }}
              >
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
    paddingBottom: 20,
  },
  reminderInputWrapper: {
    paddingLeft: 60,
    paddingBottom: 30,
  },
  buttonWrapper: {
    ...Container.centerAligned,
    flex: 1,
    width: "95%",
    margin: "2.5%",
  },
});

export default AddGoalForm;
