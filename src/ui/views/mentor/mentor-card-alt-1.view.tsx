import { BottomSheetBackdropView } from "@/ui/views/misc";
import { Entypo } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React from "react";
import { ImageBackground } from "react-native";
import { Image, Text, View, XStack, YStack } from "tamagui";

export const MentorCardAlt1 = React.memo(function () {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handlePresentModalClose = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <>
      <XStack
        gap={10}
        padding={10}
        backgroundColor={"white"}
        borderRadius={10}
        onPress={handlePresentModalPress}
      >
        <Image
          source={require("~/images/avatar1.png")}
          style={{ height: 80, width: 80, borderRadius: 100 }}
        />
        <YStack gap={5} justifyContent="center">
          <YStack>
            <Text
              fontSize={16}
              color={"rgba(26,26,26,1)"}
              fontFamily={"RedHatDisplay_700Bold"}
            >
              Didier Drogba
            </Text>
            <Text
              color={"rgba(74,74,74,1)"}
              fontFamily={"RedHatText_500Medium"}
            >
              Leader et philantrope, Abidjan
            </Text>
          </YStack>
          <Text
            color={"rgba(229,75,75,1)"}
            fontFamily={"RedHatDisplay_500Medium"}
          >
            Voir la biographie
          </Text>
        </YStack>
      </XStack>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleComponent={null}
        backdropComponent={BottomSheetBackdropView}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <YStack paddingVertical={20}>
            <View
              position="absolute"
              padding={15}
              right={0}
              onPress={handlePresentModalClose}
            >
              <Entypo name="cross" size={24} color="black" />
            </View>
            <YStack alignItems="center">
              <Image
                source={require("~/images/avatar1.png")}
                style={{ height: 80, width: 80, borderRadius: 100 }}
              />
              <YStack alignItems="center">
                <Text
                  fontSize={16}
                  color={"rgba(26,26,26,1)"}
                  fontFamily={"RedHatDisplay_700Bold"}
                >
                  Didier Drogba
                </Text>
                <Text
                  color={"rgba(74,74,74,1)"}
                  fontFamily={"RedHatText_500Medium"}
                >
                  Leader et philantrope, Abidjan
                </Text>
              </YStack>
            </YStack>

            <YStack gap={5} padding={20} paddingBottom={30}>
              <View
                style={{ width: "100%", height: 1, backgroundColor: "#E5E5EA" }}
              />
              <Text
                fontSize={19}
                color={"rgba(26,26,26,1)"}
                fontFamily={"RedHatDisplay_500Medium"}
              >
                Biographie
              </Text>
              <Text
                color={"rgba(74, 74, 74, 1)"}
                fontFamily={"RedHatDisplay_500Medium"}
              >
                Légende du football et philanthrope, Didier Drogba partage les
                leçons de leadership apprises sur les terrains les plus
                exigeants du monde et dans ses engagements humanitaires. Son
                approche est basée sur la résilience, la vision et la capacité à
                unir une équipe autour d'un objectif commun.
              </Text>
            </YStack>
          </YStack>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
});
