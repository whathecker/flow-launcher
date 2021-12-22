/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Image, Keyboard, TextInput, StyleSheet } from "react-native";
import { View, Text, Touchable, TouchableWithoutFeedback } from "../Themed";
import { Button } from "../shared";
import { Container, Typography } from "../../styles";
import { Formik } from "formik";

type AddGoalFormProps = {
  submitHandler: () => void;
};

type FormLabelProps = {
  text: string;
  type: "motivation" | "reminder";
};

const FormLabel: React.FC<FormLabelProps> = ({
  text,
  type,
}: FormLabelProps) => {
  return (
    <View
      style={{
        ...Container.flexStart,
      }}
    >
      <Text
        style={{
          ...Typography.h4,
          paddingRight: 12,
        }}
      >
        {text}
      </Text>
      {type === "motivation" ? (
        <Image
          style={{
            width: 32,
            height: 32,
          }}
          source={require(`../../../assets/images/rocket_1f680.png`)}
        />
      ) : null}
      {type === "reminder" ? (
        <Image
          style={{
            width: 32,
            height: 32,
          }}
          source={require(`../../../assets/images/sauropod_1f995.png`)}
        />
      ) : null}
    </View>
  );
};

type RadioOptionProps = {
  pressHandler: () => void;
  displayText: string;
};

const RadioOption: React.FC<RadioOptionProps> = ({
  displayText,
  pressHandler,
}: RadioOptionProps) => {
  return (
    <Touchable
      onPress={pressHandler}
      lightColor="#ffffff"
      darkColor="#ffffff"
      style={{
        ...Container.centerAligned,
        width: "100%",
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#636262",
        borderStyle: "solid",
        overflow: "hidden",
      }}
    >
      <Text
        lightColor="#636262"
        darkColor="#636262"
        style={{ ...Typography.p }}
      >
        {displayText}
      </Text>
    </Touchable>
  );
};

const AddGoalForm: React.FC<AddGoalFormProps> = ({
  submitHandler,
}: AddGoalFormProps) => {
  return (
    <Formik
      initialValues={{ title: "", motivation: "", reminder: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, setFieldValue, handleSubmit, values }) => (
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
            </View>
            <View style={styles.movitationInputWrapper}>
              <FormLabel text="Movivation" type="motivation" />
              <TextInput
                style={styles.motivationInput}
                multiline
                onChangeText={handleChange("motivation")}
                placeholder={`Write down why you want to achieve this goal`}
                placeholderTextColor={"#848484"}
                value={values.motivation}
              />
            </View>
            <View style={styles.reminderInputWrapper}>
              <FormLabel text="Reminder" type="reminder" />
              <View
                style={{
                  paddingTop: 30,
                  width: "80%",
                  marginLeft: "5%",
                  marginRight: "10%",
                }}
              >
                <RadioOption
                  displayText="Every Day"
                  pressHandler={() => {
                    setFieldValue("reminder", "daily");
                  }}
                />
                <RadioOption
                  displayText="Every 3 Days"
                  pressHandler={() => {
                    setFieldValue("reminder", "three_days");
                  }}
                />
                <RadioOption
                  displayText="Every Week"
                  pressHandler={() => {
                    setFieldValue("reminder", "seven_days");
                  }}
                />
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <Button ctaTxt={"Add Goal"} pressHandler={handleSubmit} />
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
    paddingLeft: 75,
    paddingBottom: 70,
  },
  goalTitleInput: {
    ...Typography.h1,
  },
  movitationInputWrapper: {
    height: "20%",
    paddingLeft: 75,
    paddingBottom: 50,
  },
  motivationInput: {
    ...Typography.p,
    paddingTop: 2,
    paddingBottom: 20,
  },
  reminderInputWrapper: {
    height: "30%",
    paddingLeft: 75,
    paddingBottom: 50,
  },
  reminderOption: {},
  buttonWrapper: {
    ...Container.centerAligned,
    flex: 1,
    width: "95%",
    margin: "2.5%",
  },
});

export default AddGoalForm;
