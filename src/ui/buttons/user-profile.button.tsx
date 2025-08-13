import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { styled, XStack ,Text} from "tamagui";

const ButtonTitleText = styled(Text, {
    //fontSize: 13,
    fontWeight: "bold",
    fontFamily: "RedHatDisplay_500Medium",
})

type Props = {
    title: string
    onPress?: () => void
}

export const UserProfileButton = React.memo(function({title, onPress}: Props){
    return <XStack onPress={onPress} backgroundColor={"white"} padding={12} paddingVertical={15} borderRadius={12} alignItems="center" justifyContent="space-between">
        <ButtonTitleText>{title}</ButtonTitleText>
        <AntDesign name="right" size={18} color="rgb(156, 163, 175)" />
    </XStack>
})