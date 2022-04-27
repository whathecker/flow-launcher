import { ViewStyle } from "react-native";

export const centerAligned: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

export const centerAlignedVertical: ViewStyle = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const leftAlignedVertical: ViewStyle = {
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

export const flexStart: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
};
