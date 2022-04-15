import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { Container, Typography, Color } from "../../../styles";

type EmptyBucketProps = {
  title: string;
};

const EmptyBucket: React.FC<EmptyBucketProps> = ({
  title,
}: EmptyBucketProps) => {
  return (
    <>
      <Text
        lightColor={Color.light.labelOnBackgroundForRead}
        darkColor={Color.dark.labelOnBackgroundForRead}
        style={styles.header}
      >
        {title}
      </Text>
      <View
        lightColor={Color.light.emptyPrioBucket}
        darkColor={Color.dark.emptyPrioBucket}
        style={styles.innerWrapper}
      >
        <Text
          lightColor={Color.light.labelOnBackgroundForRead}
          darkColor={Color.dark.labelOnBackgroundForRead}
          style={styles.placeholderText}
        >{`No awaiting tasks`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    ...Typography.h4,
    fontSize: 16,
    paddingLeft: "5%",
    paddingTop: 5,
  },
  innerWrapper: {
    ...Container.centerAligned,
    paddingTop: "12%",
    paddingBottom: "6%",
    backgroundColor: "#FEFEF8",
  },
  placeholderText: {
    ...Typography.p,
    fontSize: 14,
  },
});

export default EmptyBucket;
