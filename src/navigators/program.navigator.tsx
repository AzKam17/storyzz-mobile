import React from "react";
import { ProgramDetailScreen } from "@/screens/auth/mentor-screens/program-detail.screen";
import { CustomHeaderLeftBackView } from "@/ui/views/misc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const ProgramNavigator = createNativeStackNavigator({
  screenOptions: {
		headerShown: true,
		headerShadowVisible: false,
		headerBackVisible: false,
    headerStyle: {
      backgroundColor: "rgba(247, 243, 238, 1)"
    },
		headerLeft: () => <CustomHeaderLeftBackView />,
	},
  screens: {
    detail: { screen: ProgramDetailScreen },
  },
});
