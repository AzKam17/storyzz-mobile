import React from "react";
import { BottomNavigator } from "@/navigators/bottom.navigator";
import { ProgramNavigator } from "@/navigators/program.navigator";
import { MyAgendaScreen } from "@/screens/auth/agenda";
import {Text} from 'tamagui'
import { createStackNavigator } from '@react-navigation/stack';

export const AuthNavigator = createStackNavigator({
  initialRouteName: "bottom_navigator",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    bottom_navigator: { screen: BottomNavigator },
    program: { screen: ProgramNavigator },
    agenda: {
      screen: MyAgendaScreen,
      options: {
        title: "Mon Agenda",
        headerShown: true,
        headerTitleAlign: 'left',
        headerBackTitle: "\u{2800}",
        headerTintColor: 'rgb(26, 26, 26)', 
        headerStyle: {
          backgroundColor: "rgba(247, 243, 238, 1)",
        },
        headerTitle: (props) => (
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'rgb(26, 26, 26)',
                fontFamily:"RedHatDisplay_700Bold",
                textAlign: "left"
              }}
            >
              {props.children}
            </Text>
          ),
      },
    },
  },
});
