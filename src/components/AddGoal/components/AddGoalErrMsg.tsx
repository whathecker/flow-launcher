import React from "react";
import { View, Text } from "../../Themed";

type AddGoalErrMsgProps = {
  msg: string;
};

const AddGoalErrMsg: React.FC<AddGoalErrMsgProps> = ({
  msg,
}: AddGoalErrMsgProps) => {
  return (
    <View>
      <Text>{msg}</Text>
    </View>
  );
};

export default AddGoalErrMsg;
