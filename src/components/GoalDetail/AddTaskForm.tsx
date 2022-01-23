/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { View } from "../Themed";
import { Button } from "../shared";
import { Container, Typography, Color } from "../../styles";

import { IAddTaskInput } from "../../types/core/entity";
import { Formik } from "formik";
import * as Yup from "yup";

type AddTaskFormProps = {
  goal_id: string;
};

const ValidationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string(),
});

function isFormReadyToSubmit(values: IAddTaskInput): boolean {
  return values.title.length > 0;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({
  goal_id,
}: AddTaskFormProps) => {
  return (
    <Formik
      initialValues={{ title: "", description: "", goal_id } as IAddTaskInput}
      validationSchema={ValidationSchema}
      onSubmit={() => {
        console.log("Submit pressed!!");
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => {
        return (
          <View>
            <View style={styles.titleInputWrapper}>
              <TextInput
                style={styles.titleInput}
                multiline
                autoFocus={true}
                onChangeText={handleChange("title")}
                placeholder={"Write your task in a sentence"}
                placeholderTextColor={Color.light.subtleLabel}
                value={values.title}
              />
            </View>
            <View style={styles.descInputWrapper}>
              <TextInput
                style={styles.descInput}
                multiline
                onChangeText={handleChange("description")}
                placeholder={"Write the description of your task"}
                placeholderTextColor={Color.light.subtleLabel}
                value={values.description}
              />
            </View>
            <View style={styles.buttonAreaWrapper}>
              <View style={styles.buttonWrapper}>
                <Button
                  disable={isFormReadyToSubmit(values) ? false : true}
                  ctaTxt="Add"
                  pressHandler={handleSubmit}
                />
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  titleInputWrapper: {
    paddingLeft: 20,
    paddingTop: 30,
    height: "20%",
  },
  titleInput: {
    ...Typography.p,
    fontSize: 26,
  },
  descInputWrapper: {
    paddingLeft: 20,
    paddingTop: 20,
    height: "60.5%",
  },
  descInput: {
    ...Typography.p,
    height: "125%",
  },
  buttonAreaWrapper: {
    ...Container.flexStart,
    justifyContent: "flex-end",
  },
  buttonWrapper: {
    width: "50%",
  },
});

export default AddTaskForm;
