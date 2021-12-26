import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Typography } from "../../../styles";

type AddGoalErrMsgProps = {
  msg: string;
};

const AddGoalErrMsg: React.FC<AddGoalErrMsgProps> = ({
  msg,
}: AddGoalErrMsgProps) => {
  return (
    <View style={styles.errorMsgWrapper}>
      <Text
        lightColor="#c84827"
        darkColor="#c84827"
        style={styles.errorMsgText}
      >
        {msg}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMsgWrapper: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 5,
  },
  errorMsgText: {
    ...Typography.p,
    fontSize: 16,
  },
});

export default AddGoalErrMsg;
