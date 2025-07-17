import { SignInScreen } from "@/screens/unauth";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootNavigator = createStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    sign_in: { screen: SignInScreen },
  },
});

type RootNavigatorParamList = StaticParamList<typeof RootNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamList {}
  }
}

export const Navigation = createStaticNavigation(RootNavigator);
