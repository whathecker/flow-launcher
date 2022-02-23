import React from "react";
import { Touchable } from "../../Themed";
import { Image, StyleSheet } from "react-native";

import { Container } from "../../../styles";

type GoBackButtonProps = {
  pressHandler: () => void;
};

// TODO: CloseIcon should aware of theme and change the color
const GoBackButton: React.FC<GoBackButtonProps> = ({
  pressHandler,
}: GoBackButtonProps) => {
  return (
    <Touchable style={styles.goBackbtn} onPress={pressHandler}>
      <Image
        style={styles.goBackIcon}
        source={require(`../../../../assets/images/arrow_blk.png`)}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  goBackbtn: {
    ...Container.centerAligned,
  },
  goBackIcon: {
    width: 20,
    height: 20,
  },
});

export default GoBackButton;
