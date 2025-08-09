import { BottomSheetBackdropView } from "@/ui/views/misc";
import { Entypo } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React from "react";
import { ImageBackground } from "react-native";
import { Image, Text, View, YStack } from "tamagui";


export const MentorCard = React.memo(function () {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handlePresentModalClose = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <>
      <YStack borderRadius={10} onPress={handlePresentModalPress}>
        <Image
          source={require("~/images/default-image-women-large.png")}
          style={{ width: "100%", height: 140, borderRadius: 10 }}
        />
        <YStack
          top={-5}
          padding={20}
          justifyContent="center"
          backgroundColor={"white"}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
        >
          <Text
            textAlign="left"
            fontSize={17}
            fontFamily={"RedHatText_400Regular"}
            color={"rgba(74, 74, 74, 1)"}
          >
            Avec plus de 15 ans d'expérience, Aya Konan est une figure de proue
            du coaching en communication en Côte d'Ivoire...
          </Text>
        </YStack>
      </YStack>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleComponent={null}
        backdropComponent={BottomSheetBackdropView}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <ImageBackground
            source={require("~/images/default-image-women-large.png")}
            style={{ width: "100%", height: 215 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <View
              position="absolute"
              padding={15}
              right={0}
              onPress={handlePresentModalClose}
            >
              <Entypo name="cross" size={24} color="black" />
            </View>
          </ImageBackground>
          <YStack gap={20} padding={20} paddingBottom={30}>
            <YStack>
              <Text
                fontSize={25}
                color={"rgba(153, 77, 77, 1)"}
                fontFamily={"RedHatText_600SemiBold"}
              >
                Aya Konan
              </Text>
              <Text
                fontSize={15}
                color={"rgba(74, 74, 74, 1)"}
                fontFamily={"RedHatText_400Regular"}
              >
                Experte en communication
              </Text>
            </YStack>
            <Text
              fontSize={15}
              color={"rgba(74, 74, 74, 1)"}
              fontFamily={"RedHatText_400Regular"}
            >
              Avec plus de 15 ans d'expérience, Aya Konan est une figure de
              proue du coaching en communication en Côte d'Ivoire. Elle a
              accompagné des centaines de dirigeants et d'entrepreneurs à
              maîtriser l'art du storytelling pour transformer leurs
              entreprises.
            </Text>
            <Text
              fontSize={15}
              color={"rgba(74, 74, 74, 1)"}
              fontFamily={"RedHatText_400Regular"}
            >
              Passionnée par le potentiel humain, Aya croit fermement que chaque
              histoire, bien racontée, peut changer le monde. Son approche
              unique, qui allie techniques de narration traditionnelles et
              stratégies de communication modernes, en fait une mentore
              recherchée et respectée.
            </Text>
          </YStack>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
});