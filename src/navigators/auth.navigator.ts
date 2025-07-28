import { BottomNavigator } from "@/navigators/bottom.navigator";
import { ProgramNavigator } from "@/navigators/program.navigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AuthNavigator = createNativeStackNavigator({
  initialRouteName: "bottom_navigator",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    bottom_navigator: { screen: BottomNavigator },
    program: {screen: ProgramNavigator}
  },
});
