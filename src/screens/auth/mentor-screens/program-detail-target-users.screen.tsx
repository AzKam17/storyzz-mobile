import { Text } from "@tamagui/core";
import React from "react";
import { XStack, YStack } from "tamagui";

type Props = {
  programId: string
}

export const ProgramDetailTargetUsersScreen = React.memo(function(props: Props){
  return (
    <YStack>
      <Text>À propos</Text>
    </YStack>
  );
});
