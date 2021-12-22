import * as React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity as DefaultTouchable,
  TouchableWithoutFeedback as DefaultTouchableWithoutFeedback,
} from "react-native";

import { useThemeColor } from "../hooks";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TouchableProps = ThemeProps & DefaultTouchable["props"];
export type TouchableWithoutFeedbackProps = ThemeProps &
  DefaultTouchableWithoutFeedback["props"];

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

export const Touchable: React.FC<TouchableProps> = (props: TouchableProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <DefaultTouchable style={[{ backgroundColor }, style]} {...otherProps} />
  );
};

export const TouchableWithoutFeedback: React.FC<TouchableWithoutFeedbackProps> =
  (props: TouchableWithoutFeedbackProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      "background",
    );

    return (
      <DefaultTouchableWithoutFeedback
        style={[{ backgroundColor }, style]}
        {...otherProps}
      />
    );
  };
