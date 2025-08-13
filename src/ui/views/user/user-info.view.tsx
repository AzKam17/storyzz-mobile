import React from "react";
import {Text, Image, styled, YStack } from "tamagui";

const avatar = require("~/images/avatar5.png");

const UserNameText = styled(Text, {
    fontFamily: "RedHatDisplay_700Bold",
    fontSize: 24,
    color: "#000"
})
const UserMailText = styled(Text, {
    fontFamily: "RedHatDisplay_500Medium",
    fontSize: 16,
    color: "rgb(75, 85, 99)"
})

export const UserInfoView = React.memo(function () {
  return (
    <YStack gap={10} justifyContent="center" alignItems="center">
      <Image gap={5} source={avatar} style={{ height: 90, aspectRatio: 1 }} />
      <YStack alignItems="center" justifyContent="center">
        <UserNameText>Marie</UserNameText>
        <UserMailText>marie.storyzz@email.com</UserMailText>
      </YStack>
    </YStack>
  );
});
