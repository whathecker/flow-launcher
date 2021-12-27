import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography } from "../../../styles";

type AddGoalFormLabelProps = {
  text: string;
  type: "motivation" | "reminder";
};

const AddGoalFormLabel: React.FC<AddGoalFormLabelProps> = ({
  text,
  type,
}: AddGoalFormLabelProps) => {
  return (
    <View style={styles.labelWrapper}>
      <Text lightColor="#655C5C" darkColor="#655C5C" style={styles.labelText}>
        {text}
      </Text>
      {type === "motivation" ? (
        <Image
          style={styles.icon}
          source={require(`../../../../assets/images/rocket_1f680.png`)}
        />
      ) : null}
      {type === "reminder" ? (
        <Image
          style={styles.icon}
          source={require(`../../../../assets/images/sauropod_1f995.png`)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  labelWrapper: {
    ...Container.flexStart,
  },
  labelText: {
    ...Typography.h4,
    paddingRight: 12,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default AddGoalFormLabel;
