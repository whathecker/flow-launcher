/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  NavigationContainerRef,
  CommonActions,
} from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";

let navigator: NavigationContainerRef<RootStackParamList> | null;

const setNavigator = (
  nav: NavigationContainerRef<RootStackParamList> | null,
): void => {
  navigator = nav;
};

const navigate = (
  routeName: string,
  params?: Record<string, unknown>,
): void => {
  navigator!.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

const resetRoot = (routeName: string): void => {
  navigator!.resetRoot({
    index: 0,
    routes: [{ name: routeName }],
  });
};

const goBack = (): void => {
  navigator!.goBack();
};

export default { setNavigator, navigate, resetRoot, goBack };
