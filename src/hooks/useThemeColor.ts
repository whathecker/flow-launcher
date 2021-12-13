import { Color } from "../styles";
import useColorScheme from "./useColorScheme";

export default function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Color.light & keyof typeof Color.dark,
): string {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Color[theme][colorName];
  }
}
