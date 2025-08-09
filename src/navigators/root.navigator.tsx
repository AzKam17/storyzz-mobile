import { useIsSignedOut, useIsSignedIn } from "@/hooks";
import { AuthNavigator } from "@/navigators/auth.navigator";
import { UnAuthNavigator } from "@/navigators/unauth.navigator";

import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const RootNavigator = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    auth: { if: useIsSignedIn, screen: AuthNavigator },
    unauth: { if: useIsSignedOut, screen: UnAuthNavigator },
  },
});

type RootNavigatorParamList = StaticParamList<typeof RootNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamList {}
  }
}

export const Navigation = createStaticNavigation(RootNavigator);
