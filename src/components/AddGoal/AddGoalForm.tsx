/* eslint-disable no-console */
import React, { useContext } from "react";
import { GoalsContext } from "../../contexts/goals";
import { Keyboard, TextInput, StyleSheet } from "react-native";

import { View, TouchableWithoutFeedback } from "../Themed";
import { AddGoalFormLabel, AddGoalErrMsg } from "./components";
import { Button } from "../shared";

import { Container, Typography } from "../../styles";
import { IAddGoalInput } from "../../types/core/entity";
import { navigationRef } from "../../utils";
import { Formik } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  motivation: Yup.string().required("Required"),
  reminder: Yup.string().required("Please select one of the options"),
});

function _isFormReadyToSubmit(input: IAddGoalInput): boolean {
  if (input.title !== "" && input.motivation !== "") {
    return false;
  }
  return true;
}

const AddGoalForm: React.FC = () => {
  const { addGoal } = useContext(GoalsContext);
  return (
    <Formik
      initialValues={
        { title: "", motivation: "", reminder: "daily" } as IAddGoalInput
      }
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        try {
          await addGoal(values);
          navigationRef.resetRoot("Goal");
        } catch (error) {
          // TODO: handle error here
          console.error(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => {
        return (
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
              <View style={styles.goalTitleInputWrapper}>
                <AddGoalFormLabel text="Goal" type="goal" />
                <TextInput
                  style={styles.goalTitleInput}
                  multiline
                  onChangeText={handleChange("title")}
                  placeholder={`What do you want to achieve?`}
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
              <View style={styles.buttonWrapper}>
                <Button
                  ctaTxt={"Add goal"}
                  pressHandler={handleSubmit}
                  disable={_isFormReadyToSubmit(values)}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  goalTitleInputWrapper: {
    width: "90%",
    height: "40%",
    paddingTop: 70,
    paddingLeft: 60,
    paddingBottom: 70,
  },
  goalTitleInput: {
    ...Typography.h1,
  },
  movitationInputWrapper: {
    width: "90%",
    height: "40%",
    paddingLeft: 60,
    paddingBottom: 50,
  },
  motivationInput: {
    ...Typography.p,
    paddingTop: 2,
    paddingBottom: 10,
  },
  buttonWrapper: {
    ...Container.centerAligned,
    flex: 1,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
});

export default AddGoalForm;
