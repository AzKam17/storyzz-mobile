import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { styled, XStack, Text } from "tamagui";
import { SessionState } from "@/states/auth/session.state";
import { useSetAtom } from "jotai";

const ButtonText = styled(Text, {
    color: "rgb(220, 38, 38)",
    fontWeight: "bold",
    fontFamily: "RedHatDisplay_500Medium",
})

export const LogoutButton = React.memo(function(){
    const setSession = useSetAtom(SessionState);
    
    const onPress = React.useCallback(function(){
        setSession(null); 
        console.log("dqwq")
    }, [setSession])
    
    return <XStack onPress={onPress} backgroundColor={"white"} padding={12} paddingVertical={15} borderRadius={12} alignItems="center" justifyContent="center">
        <ButtonText>Se déconnecter</ButtonText>
    </XStack>
})