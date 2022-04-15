import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography, Color } from "../../../styles";

type AddGoalFormLabelProps = {
  text: string;
  type: "motivation" | "goal";
};

const AddGoalFormLabel: React.FC<AddGoalFormLabelProps> = ({
  text,
  type,
}: AddGoalFormLabelProps) => {
  return (
    <View style={styles.labelWrapper}>
      <Text
        lightColor={Color.light.labelOnBackgroundForRead}
        darkColor={Color.dark.labelOnBackgroundForRead}
        style={styles.labelText}
      >
        {text}
      </Text>
      {type === "motivation" ? (
        <Image
          style={styles.icon}
          source={require(`../../../../assets/images/rocket_1f680.png`)}
        />
      ) : null}
      {type === "goal" ? (
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
    paddingBottom: 10,
  },
  labelText: {
    ...Typography.h1,
    fontSize: 20,
    paddingRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default AddGoalFormLabel;
