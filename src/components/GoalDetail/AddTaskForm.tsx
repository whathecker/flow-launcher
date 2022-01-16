/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { View } from "../Themed";
import { Button } from "../shared";
import { Container, Typography, Color } from "../../styles";

import { Formik } from "formik";

const AddTaskForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      onSubmit={() => {
        console.log("Submit pressed!!");
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
        <View>
          <View
            style={{
              paddingLeft: 20,
              paddingTop: 30,
              height: "20%",
            }}
          >
            <TextInput
              style={{ ...Typography.p, fontSize: 26 }}
              multiline
              autoFocus={true}
              onChangeText={handleChange("title")}
              placeholder={"Write your task in a sentence"}
              placeholderTextColor={Color.light.subtleLabel}
              value={values.title}
            />
          </View>
          <View style={{ paddingLeft: 20, paddingTop: 20, height: "60.5%" }}>
            <TextInput
              style={{ ...Typography.p, height: "95%" }}
              multiline
              onChangeText={handleChange("description")}
              placeholder={"Write the description of your task"}
              placeholderTextColor={Color.light.subtleLabel}
              value={values.description}
            />
          </View>
          <View
            style={{
              ...Container.flexStart,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                width: "50%",
              }}
            >
              <Button
                ctaTxt="Add"
                pressHandler={() => console.log("pressed")}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default AddTaskForm;
