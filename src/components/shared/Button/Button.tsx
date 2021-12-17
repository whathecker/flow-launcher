import React from "react";
import { Touchable, Text } from "../../Themed";
import { StyleSheet } from "react-native";
import { Container, Typography } from "../../../styles";

type ButtonProps = {
  ctaTxt: string;
  pressHandler: () => void;
};

const Button: React.FC<ButtonProps> = ({
  ctaTxt,
  pressHandler,
}: ButtonProps) => {
  return (
    <Touchable
      onPress={pressHandler}
      style={styles.button}
      lightColor="#0FA858"
      darkColor="#0FA858"
    >
      <Text style={styles.buttonText} lightColor="#fff" darkColor="#fff">
        {ctaTxt}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...Container.centerAligned,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    ...Typography.p,
  },
});

export default Button;
