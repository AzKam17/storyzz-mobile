import { HomeScreen, MentorScreen, ProfilScreen } from "@/screens/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import AccountSvg from "~/svg/AccountSvg";
import MentorSvg from "~/svg/MentorSvg";

export const BottomNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
	tabBarActiveTintColor: "rgba(229, 75, 75, 1)",
    tabBarLabelStyle: {
      fontSize: 13,
      fontWeight: "bold",
      fontFamily: "tamil-sangam-mn",
	  
    },
  },
  screens: {
    home: {
      screen: HomeScreen,
      name: "Accueil",
      options: {
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home-outline" size={24} color={color} />
        ),
      },
    },
    mentor: {
      screen: MentorScreen,
      name: "Mentor",
      options: {
        tabBarIcon: ({ color }) => <MentorSvg />,
      },
    },
    profil: {
      screen: ProfilScreen,
      name: "Profil",
      options: {
        tabBarIcon: ({ color }) => <AccountSvg />,
      },
    },
  },
});

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    padding: 0,
  },
});
