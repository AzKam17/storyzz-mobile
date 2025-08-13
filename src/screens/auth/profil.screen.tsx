import { LogoutButton, UserProfileButton } from "@/ui/buttons";
import { Page } from "@/ui/views";
import { UserInfoView } from "@/ui/views/user";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { YStack } from "tamagui";

export const ProfilScreen = React.memo(function () {
  const navigation = useNavigation()

  const goToAgenda = React.useCallback(function(){
    navigation.navigate("auth", {screen: "agenda"})
  }, [navigation])

  return (
    <Page>
      <YStack flex={1} justifyContent="center" paddingBottom={80}>
        <UserInfoView />
        <YStack gap={10} marginVertical={30}>
          <UserProfileButton title="Mon Agenda" onPress={goToAgenda} />
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
