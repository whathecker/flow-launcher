import React from "react";
import { Touchable } from "../../Themed";
import { Image, StyleSheet } from "react-native";

import { Container } from "../../../styles";

type GoBackButtonProps = {
  pressHandler: () => void;
  backgroundColor: string;
};

const GoBackButtonWhite: React.FC<GoBackButtonProps> = ({
  pressHandler,
  backgroundColor,
}: GoBackButtonProps) => {
  return (
    <Touchable
      style={{
        ...Container.centerAligned,
        backgroundColor: backgroundColor,
      }}
      onPress={pressHandler}
    >
      <Image
        style={styles.goBackIcon}
        source={require(`../../../../assets/images/arrow_white.png`)}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  goBackIcon: {
    width: 20,
    height: 20,
  },
});

export default GoBackButtonWhite;
