import { SignInScreen } from "@/screens/unauth";
import { LoginScreen } from "@/screens/unauth/login.screen";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootNavigator = createStackNavigator({
  initialRouteName: 'login',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    sign_in: { screen: SignInScreen },
    login: { screen: LoginScreen },
  },
});

type RootNavigatorParamList = StaticParamList<typeof RootNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamList {}
  }
}

export const Navigation = createStaticNavigation(RootNavigator);
