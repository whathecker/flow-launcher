import React from "react";
import { Image } from "react-native";

type PrioIconProps = {
  style: Record<string, string | number>;
};

export const EmptyPrioIcon: React.FC<PrioIconProps> = (
  props: PrioIconProps,
) => {
  const { style } = props;
  return (
    <Image
      style={style}
      source={require("../../../../assets/images/open-file-folder_1f4c2.png")}
    />
  );
};

export const HighestPrioIcon: React.FC<PrioIconProps> = (
  props: PrioIconProps,
) => {
  const { style } = props;
  return (
    <Image
      style={style}
      source={require("../../../../assets/images/double-exclamation-mark_203c-fe0f.png")}
    />
  );
};

export const HighPrioIcon: React.FC<PrioIconProps> = (props: PrioIconProps) => {
  const { style } = props;
  return (
    <Image
      style={style}
      source={require("../../../../assets/images/glowing-star_1f31f.png")}
    />
  );
};

export const MidPrioIcon: React.FC<PrioIconProps> = (props: PrioIconProps) => {
  const { style } = props;
  return (
    <Image
      style={style}
      source={require("../../../../assets/images/mantelpiece-clock_1f570-fe0f.png")}
    />
  );
};

export const LowPrioIcon: React.FC<PrioIconProps> = (props: PrioIconProps) => {
  const { style } = props;
  return (
    <Image
      style={style}
      source={require("../../../../assets/images/turtle_1f422.png")}
    />
  );
};
