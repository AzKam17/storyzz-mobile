import React from "react";
import { styled, Text, View, XStack, YStack } from "tamagui";

const OuterView = styled(XStack, {
  padding: 16,
  borderRadius: 12,
  backgroundColor: "white",
});

const MentorTitle = styled(Text, {
  fontSize: 18,
  fontFamily: "RedHatText_600SemiBold",
  color: "rgba(153, 77, 77, 1)",
});
const ProgramTitle = styled(Text, {
  fontSize: 22,
  fontFamily: "RedHatDisplay_900Black",
  color: "rgba(0, 0, 0, 1)",
});
const DescriptionTitle = styled(Text, {
  fontSize: 16,
  fontFamily: "RedHatText_400Regular",
  color: "rgb(116, 79, 79)",
});

export const ProgramCard = React.memo(function () {
  return (
    <OuterView>
      <View flex={1}></View>
      <YStack flex={3} gap={5}>
        <MentorTitle>Edith Brou-Bleu</MentorTitle>
        <ProgramTitle>Maîtriser sa Productivité Personnelle</ProgramTitle>
        <DescriptionTitle>
          Organisez votre travail et gérez vos priorités pour atteindre vos
          objectifs sans vous épuiser
        </DescriptionTitle>
      </YStack>
    </OuterView>
  );
});
