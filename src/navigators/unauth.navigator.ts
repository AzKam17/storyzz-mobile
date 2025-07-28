import { SignInScreen } from "@/screens/unauth";
import { LoginScreen } from "@/screens/unauth/login.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const UnAuthNavigator = createNativeStackNavigator({
  initialRouteName: "login",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    sign_in: { screen: SignInScreen },
    login: { screen: LoginScreen },
  },
});
