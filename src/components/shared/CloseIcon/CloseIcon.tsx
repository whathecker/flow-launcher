import React from "react";
import { Touchable } from "../../Themed";
import { Image, StyleSheet } from "react-native";

import { Container } from "../../../styles";

type CloseIconProps = {
  pressHandler: () => void;
};

// TODO: CloseIcon should aware of theme and change the color
const CloseIcon: React.FC<CloseIconProps> = ({
  pressHandler,
}: CloseIconProps) => {
  return (
    <Touchable style={styles.closeIcon} onPress={pressHandler}>
      <Image
        style={styles.closeIconImg}
        source={require(`../../../../assets/images/close.png`)}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    ...Container.centerAligned,
  },
  closeIconImg: {
    width: 18,
    height: 18,
  },
});

export default CloseIcon;
