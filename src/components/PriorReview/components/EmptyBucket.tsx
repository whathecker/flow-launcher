import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../Themed";
import { EmptyPrioIcon } from "../../shared";
import { Container, Typography, Color } from "../../../styles";

type EmptyBucketProps = {
  title: string;
};

const EmptyBucket: React.FC<EmptyBucketProps> = ({
  title,
}: EmptyBucketProps) => {
  return (
    <>
      <View style={{ ...Container.flexStart, paddingLeft: "6%" }}>
        <EmptyPrioIcon style={{ width: 30, height: 30 }} />
        <Text
          lightColor={Color.light.labelOnBackgroundForRead}
          darkColor={Color.dark.labelOnBackgroundForRead}
          style={styles.header}
        >
          {title}
        </Text>
      </View>
      <View
        lightColor={Color.light.emptyPrioBucket}
        darkColor={Color.dark.emptyPrioBucket}
        style={styles.innerWrapper}
      >
        <Text
          lightColor={Color.light.labelOnBackgroundForRead}
          darkColor={Color.dark.labelOnBackgroundForRead}
          style={styles.placeholderText}
        >{`No tasks in this list`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    ...Typography.h4,
    fontSize: 16,
    paddingLeft: "5%",
  },
  innerWrapper: {
    ...Container.centerAligned,
    paddingTop: "12%",
    paddingBottom: "6%",
  },
  placeholderText: {
    ...Typography.p,
    fontSize: 14,
  },
});

export default EmptyBucket;
