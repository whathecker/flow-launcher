import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../Themed";
import { Button } from "../shared";

type AddGoalButtonProps = {
  submitHandler: () => void;
};

const AddGoalButton: React.FC<AddGoalButtonProps> = ({
  submitHandler,
}: AddGoalButtonProps) => {
  return (
    <View style={styles.buttonWrapper}>
      <Button ctaTxt={"Add Goal"} pressHandler={submitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "90%",
  },
});

export default AddGoalButton;
