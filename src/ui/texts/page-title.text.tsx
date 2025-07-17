import React from "react";
import { styled, Text, View, XStack } from "tamagui";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Title = styled(Text, {
  fontSize: 29,
  textAlign: "center",
  fontFamily: "RedHatText_700Bold",
  flex: 1,
});

interface Props {
  goBack?: boolean;
  children?: string;
}

export const PageTitleText = React.memo(function ({ goBack, children }: Props) {
  const navigation = useNavigation();
  return (
    <XStack alignItems="center" position="relative">
      {goBack && (
        <View 
          padding={10} 
          onPress={() => navigation.goBack()}
          position="absolute"
          left={0}
          zIndex={1}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
      )}
      <Title paddingHorizontal={goBack ? 50 : 0}>{children}</Title>
    </XStack>
  );
});
