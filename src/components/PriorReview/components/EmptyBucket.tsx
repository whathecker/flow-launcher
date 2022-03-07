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
      <Text style={styles.header}>{title}</Text>
      <View style={styles.innerWrapper}>
        <Text style={styles.placeholderText}>{`No awaiting tasks`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    ...Typography.h4,
    fontSize: 19,
    paddingLeft: "5%",
    color: Color.light.text,
  },
  innerWrapper: {
    ...Container.centerAligned,
    paddingTop: "12%",
    paddingBottom: "6%",
    backgroundColor: "#FEFEF8",
  },
  placeholderText: {
    ...Typography.p,
    fontSize: 16,
    color: Color.light.subtleLabel,
  },
});

export default EmptyBucket;
