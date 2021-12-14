import * as React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity as DefaultTouchable,
} from "react-native";

import { useThemeColor } from "../hooks";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type PressableProps = ThemeProps & DefaultTouchable["props"];

//TODO: consider to separate Text into BodyText & HeaderText

export const Text: React.FC<TextProps> = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View: React.FC<ViewProps> = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const Touchable: React.FC<PressableProps> = (props: PressableProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <DefaultTouchable style={[{ backgroundColor }, style]} {...otherProps} />
  );
};
