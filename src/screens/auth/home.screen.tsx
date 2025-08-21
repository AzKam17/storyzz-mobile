import { Page } from "@/ui/views";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Avatar, XStack, YStack, Input } from "tamagui";
import { CommonActions } from "@react-navigation/native";
import FlowerPotSvg from "~/svg/FlowerPotSvg";

const Header = React.memo(function () {
  return (
    <XStack alignItems="center" justifyContent="space-between">
      <XStack gap={10} alignItems="center">
        <Avatar circular size="$4">
          <Avatar.Image src={require("~/images/avatar3.png")} />
        </Avatar>
        <Text fontSize={18} fontFamily={"RedHatDisplay_700Bold"}>
          Allez, vas-y Marie !
        </Text>
      </XStack>
      <SimpleLineIcons name="bell" size={24} color="black" />
    </XStack>
  );
});

const SearchBar = React.memo(function () {
  return (
    <YStack gap={12} padding={20} borderRadius={15} backgroundColor={"white"}>
      <Text
        textAlign="center"
        fontSize={15}
        fontFamily={"RedHatDisplay_700Bold"}
      >
        Besoin d'aide pour trouver le bon programme ?
      </Text>
      <XStack gap={5}>
        <View flex={1}>
          <Input
            placeholder="Ex: 'Je veux être plus convaincant...'"
            backgroundColor={"#f0f0f0"}
            borderColor={"#e5e7eb"}
            borderWidth={0.25}
          />
        </View>
        <View
          borderRadius={5}
          aspectRatio={1}
          justifyContent="center"
          alignItems="center"
          backgroundColor={"#cd5c5c"}
        >
          <MaterialIcons name="search" size={30} color="white" />
        </View>
      </XStack>
    </YStack>
  );
});

export const HomeScreen = React.memo(function () {
  const navigation = useNavigation();

  const goToPrograms = React.useCallback(
    function () {
      navigation.dispatch(CommonActions.navigate({ name: "Mentor" }));
    },
    [navigation]
  );

  return (
    <Page hasBottom={false}>
      <Header />
      <SearchBar />
      <View flex={1}>
        <FlowerPotSvg />
      </View>
      <YStack gap={15} paddingHorizontal={20} paddingVertical={10}>
        <Text
          textAlign="center"
          fontSize={25}
          fontFamily={"RedHatDisplay_700Bold"}
        >
          Débloquez votre potentiel.
        </Text>
        <Text
          textAlign="center"
          fontSize={16}
          fontFamily={"RedHatDisplay_300Light"}
        >
          Rejoignez des sessions de mentorat en direct avec les meilleurs
          experts pour accélérer votre carrière.
        </Text>
        <View
          alignSelf="center"
          backgroundColor={"#e54b4be6"}
          paddingVertical={10}
          paddingHorizontal={35}
          borderRadius={10}
          onPress={goToPrograms}
        >
          <Text
            color={"white"}
            fontSize={17}
            fontFamily={"RedHatDisplay_700Bold"}
          >
            Découvrir nos programmes
          </Text>
        </View>
      </YStack>
    </Page>
  );
});
