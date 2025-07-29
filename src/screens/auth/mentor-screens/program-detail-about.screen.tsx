import { TabSectionText, TabSectionTitle } from "@/ui/texts";
import { Text } from "@tamagui/core";
import React from "react";
import { View } from "react-native";
import { XStack, YStack } from "tamagui";

type Props = {
  programId: string;
};

export const ProgramDetailAboutScreen = React.memo(function (props: Props) {
  return (
    <YStack gap={10} paddingVertical={20}>
      <YStack>
        <TabSectionTitle>À propos</TabSectionTitle>
        <TabSectionText>
          Ce programme intensif est conçu pour transformer votre manière de
          communiquer. En s'appuyant sur les techniques des plus grands
          orateurs, vous apprendrez à captiver votre audience, à structurer vos
          idées avec clarté et à utiliser votre voix pour inspirer confiance.
          Chaque module combine théorie et exercices pratiques pour une
          progression rapide et durable.
        </TabSectionText>
      </YStack>
      <YStack>
        <TabSectionTitle>Ce que vous apprendrez</TabSectionTitle>
      </YStack>
      <YStack>
        <TabSectionTitle>Pour qui</TabSectionTitle>
        <TabSectionText>
          Idéal pour les entrepreneurs, les managers, les chefs de projet, et
          toute personne souhaitant améliorer son impact à l'oral. Que vous
          prépariez une présentation cruciale, un pitch pour des investisseurs
          ou que vous vouliez simplement être plus à l'aise en réunion, cette
          session est faite pour vous.
        </TabSectionText>
      </YStack>
      <YStack>
        <TabSectionTitle>Votre mentor</TabSectionTitle>
        <TabSectionText>
          Idéal pour les entrepreneurs, les managers, les chefs de projet, et
          toute personne souhaitant améliorer son impact à l'oral. Que vous
          prépariez une présentation cruciale, un pitch pour des investisseurs
          ou que vous vouliez simplement être plus à l'aise en réunion, cette
          session est faite pour vous.
        </TabSectionText>
      </YStack>
    </YStack>
  );
});
