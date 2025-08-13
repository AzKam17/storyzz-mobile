import { LogoutButton, UserProfileButton } from "@/ui/buttons";
import { Page } from "@/ui/views";
import { UserInfoView } from "@/ui/views/user";
import React from "react";
import { YStack } from "tamagui";

export const ProfilScreen = React.memo(function () {
  return (
    <Page>
      <YStack flex={1} justifyContent="center" paddingBottom={80}>
        <UserInfoView />
        <YStack gap={10} marginVertical={30}>
          <UserProfileButton title="Mon Agenda" />
          <UserProfileButton title="Historique des sessions" />
          <UserProfileButton title="Paramètres du compte" />
          <UserProfileButton title="Aide et support" />
          <UserProfileButton title="Mon Agenda" />
        </YStack>
        <LogoutButton />
      </YStack>
    </Page>
  );
});
