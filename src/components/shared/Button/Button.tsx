import React from "react";
import { Touchable, Text } from "../../Themed";
import { StyleSheet } from "react-native";
import { Container, Typography, Shadow } from "../../../styles";

type ButtonProps = {
  ctaTxt: string;
  pressHandler: () => void;
  disable?: boolean;
  fontSize?: number;
};

const Button: React.FC<ButtonProps> = ({
  ctaTxt,
  pressHandler,
  disable,
  fontSize = 18,
}: ButtonProps) => {
  const backgroundColor = disable ? "#848785" : "#0FA858";
  return (
    <Touchable
      onPress={pressHandler}
      style={styles.button}
      lightColor={backgroundColor}
      darkColor={backgroundColor}
      disabled={disable}
    >
      <Text
        style={[styles.buttonText, { fontSize: fontSize }]}
        lightColor="#fff"
        darkColor="#fff"
      >
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
    ...Shadow.regularbackDrop,
  },
  buttonText: {
    ...Typography.p,
  },
});

export default Button;
