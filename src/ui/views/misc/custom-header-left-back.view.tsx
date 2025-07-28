import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View } from 'tamagui'

type props = {
	onPress?: () => void
}

export const CustomHeaderLeftBackView = React.memo(function (props: props) {
	const navigation = useNavigation()

	const { onPress } = props

	const func = React.useCallback(() => {
		if (onPress) {
			onPress()
			return
		}
		navigation.goBack()
	}, [onPress])

	return (
		<TouchableOpacity onPress={func}>
			<View padding={10}>
				<Entypo name="chevron-small-left" size={30} color="black" />
			</View>
		</TouchableOpacity>
	)
})
