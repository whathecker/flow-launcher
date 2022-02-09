import React from "react";
import { Touchable, Text } from "../../Themed";
import { Container, Typography } from "../../../styles";

type RadioButtonProps = {
  pressHandler: () => void;
  value: string;
  displayText: string;
  activeValue: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  displayText,
  value,
  activeValue,
  pressHandler,
}: RadioButtonProps) => {
  const isBtnActive = value === activeValue ? true : false;
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
        marginLeft: 3,
        marginRight: 3,
        borderRadius: 10,
        borderWidth: isBtnActive ? 2 : 1,
        borderColor: isBtnActive ? "#0FA858" : "#636262",
        borderStyle: "solid",
        overflow: "hidden",
      }}
    >
      <Text
        lightColor={isBtnActive ? "#0FA858" : "#636262"}
        darkColor={isBtnActive ? "#0FA858" : "#636262"}
        style={{ ...Typography.p }}
      >
        {displayText}
      </Text>
    </Touchable>
  );
};

export default RadioButton;
