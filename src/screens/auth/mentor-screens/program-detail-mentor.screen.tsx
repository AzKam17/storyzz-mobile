import { Text } from "@tamagui/core";
import React from "react";
import { XStack, YStack } from "tamagui";

type Props = {
  programId: string
}


export const ProgramDetailMentorScreen = React.memo(function(props: Props){
  return (
    <YStack>
      <Text>À propos</Text>
    </YStack>
  );
});
