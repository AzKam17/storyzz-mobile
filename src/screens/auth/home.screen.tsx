import { Page } from "@/ui/views";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Avatar, XStack, YStack, Input } from "tamagui";
import { CommonActions } from "@react-navigation/native";
import FlowerPotSvg from "~/svg/FlowerPotSvg";
import { Input1 } from "@/ui/inputs";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetBackdropView } from "@/ui/views/misc";
import { AIChatMessage } from "../../../types";
import { Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AIChatView } from "@/ui/views/chat";

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

const SearchBar = React.memo(function ({
  handleSearch,
}: {
  handleSearch?: (search: string) => void;
}) {
  const [search, setSearch] = React.useState<string>("");

  const onPress = React.useCallback(
    function () {
      if (!handleSearch) return;
      handleSearch(search);
      setSearch("");
    },
    [search, handleSearch]
  );

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
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={onPress}
          />
        </View>
        <View
          onPress={onPress}
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
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [response, setResponse] = React.useState<string>("");
  const [chatMessages, setChatMessages] = React.useState<AIChatMessage[]>([]);
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const goToPrograms = React.useCallback(
    function () {
      navigation.dispatch(CommonActions.navigate({ name: "Mentor" }));
    },
    [navigation]
  );

  const handlePresentModalClose = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const openChat = React.useCallback(function (searchValue: string) {
    if (!searchValue) return;
    bottomSheetModalRef?.current?.close();

    const time = setTimeout(() => {
      Keyboard.dismiss();
      bottomSheetModalRef?.current?.present();
      chatMessages.push({
        sender: "user",
        body: searchValue,
      });
    }, 150);

    return () => clearTimeout(time);
  }, []);

  return (
    <Page hasBottom={false}>
      <Header />
      <SearchBar handleSearch={openChat} />
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

      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleComponent={null}
        backdropComponent={BottomSheetBackdropView}
      >
        <BottomSheetView style={{ flex: 1, paddingBottom: insets.bottom }}>
          <XStack padding={15} borderColor={"#e5e7eb"} borderBottomWidth={1}>
            <XStack gap={5}>
              <Entypo name="message" size={24} color="rgba(255, 59, 48, 1)" />
              <Text fontSize={18} fontFamily={"RedHatDisplay_700Bold"}>
                Votre Assistant AI
              </Text>
            </XStack>

            <View
              position="absolute"
              padding={15}
              right={0}
              onPress={handlePresentModalClose}
            >
              <Entypo name="cross" size={24} color="black" />
            </View>
          </XStack>
          <YStack>
            <AIChatView messages={chatMessages} />
          </YStack>
          <XStack gap={10} padding={15}>
            <Input1
              bottomSheet={true}
              placeholder="   Votre message..."
              value={response}
              onChangeText={setResponse}
            />
            <View
              onPress={() => {}}
              borderRadius={5}
              aspectRatio={1}
              justifyContent="center"
              alignItems="center"
              backgroundColor={!!response ? "#cd5c5c" : "#cd5c5c80"}
            >
              <Ionicons name="send" size={24} color="white" />
            </View>
          </XStack>
        </BottomSheetView>
      </BottomSheetModal>
    </Page>
  );
});
