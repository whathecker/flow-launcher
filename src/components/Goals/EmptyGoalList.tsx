import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { Typography, Color } from "../../styles";

const EmptyGoalList: React.FC = () => {
  const darkTextColor = Color.light.subtleLabel;
  const lightTextColor = Color.light.subtleLabel;
  return (
    <>
      <View style={styles.blockWrapper}>
        <Image
          style={styles.image}
          source={require(`../../../assets/images/sauropod_1f995.png`)}
        />
      </View>
      <View style={styles.blockWrapper}>
        <Text
          lightColor={lightTextColor}
          darkColor={darkTextColor}
          style={styles.text}
        >{`The journey of a thousand miles`}</Text>
        <Text
          lightColor={lightTextColor}
          darkColor={darkTextColor}
          style={styles.text}
        >{`begins with a single step.`}</Text>
      </View>
      <View style={styles.blockWrapper}>
        <Text
          lightColor={lightTextColor}
          darkColor={darkTextColor}
          style={styles.text}
        >{`LAO TZU`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  blockWrapper: {
    paddingTop: 5,
    paddingBottom: 18,
  },
  image: {
    width: 95,
    height: 95,
  },
  text: {
    ...Typography.p,
    textAlign: "center",
  },
});

export default EmptyGoalList;
