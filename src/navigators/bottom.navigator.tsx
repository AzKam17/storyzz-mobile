
import { HomeScreen, MentorScreen, ProfilScreen } from '@/screens/auth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'

export const BottomNavigator = createBottomTabNavigator({
	screenOptions: {
		headerShown: false,
		tabBarLabelStyle: {
			fontSize: 13,
			fontWeight: 'bold',
			fontFamily: 'tamil-sangam-mn',
		},
	},
	screens: {
		home: {
			screen: HomeScreen,
			name: 'Accueil',
		},
		mentor: {
			screen: MentorScreen,
			name: 'Mentor',
		},
		profil: {
			screen: ProfilScreen,
			name: 'Profil',
		},
	},
})

const styles = StyleSheet.create({
	container: {
		aspectRatio: 1,
		padding: 0,
	},
})