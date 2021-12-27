import React from "react";
import { Text, Touchable } from "../../Themed";
import { Container, Typography } from "../../../styles";
import { Reminder } from "../../../types/entity";

type AddGoalRadioOptionProps = {
  pressHandler: () => void;
  name: Reminder;
  displayText: string;
  activeValue: string;
};

const AddGoalRadioOption: React.FC<AddGoalRadioOptionProps> = ({
  displayText,
  name,
  activeValue,
  pressHandler,
}: AddGoalRadioOptionProps) => {
  const isBtnActive = name === activeValue ? true : false;
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

export default AddGoalRadioOption;
