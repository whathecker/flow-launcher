/* eslint-disable no-console */
import React, { useContext } from "react";
import { GoalsContext } from "../../contexts/goals";
import { TextInput, StyleSheet } from "react-native";
import { View } from "../Themed";
import { Button } from "../shared";

import { Container, Typography, Color } from "../../styles";

import { IAddTaskInput } from "../../types/core/entity";
import { Formik } from "formik";
import * as Yup from "yup";

type AddTaskFormProps = {
  goal_id: string;
  addTaskFormOpenedHandler: React.Dispatch<React.SetStateAction<boolean>>;
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
  addTaskFormOpenedHandler,
}: AddTaskFormProps) => {
  const { addTaskToGoal } = useContext(GoalsContext);
  return (
    <Formik
      initialValues={{ title: "", description: "", goal_id } as IAddTaskInput}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        try {
          await addTaskToGoal(values);
          addTaskFormOpenedHandler(false);
        } catch (error) {
          // TOOD: add error handling
          console.error(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View>
            <View style={styles.titleInputWrapper}>
              <TextInput
                style={styles.titleInput}
                multiline
                scrollEnabled
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
                scrollEnabled
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
    width: "95%",
    paddingLeft: 20,
    paddingTop: 30,
    height: "28%",
    maxHeight: "28%",
  },
  titleInput: {
    ...Typography.p,
    fontSize: 22,
  },
  descInputWrapper: {
    width: "95%",
    paddingLeft: 20,
    paddingBottom: 20,
    height: "50%",
    maxHeight: "50%",
  },
  descInput: {
    ...Typography.p,
    fontSize: 16,
    //minHeight: "100%",
  },
  buttonAreaWrapper: {
    ...Container.flexStart,
    height: "18%",
    justifyContent: "flex-end",
    marginTop: "1.5%",
    marginRight: 5,
  },
  buttonWrapper: {
    width: "50%",
  },
});

export default AddTaskForm;
