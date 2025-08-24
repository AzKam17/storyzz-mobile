import { BottomSheetBackdropView } from "@/ui/views/misc";
import { programs } from "@/utils";
import { Entypo } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React from "react";
import { ImageBackground } from "react-native";
import { Image, Text, View, XStack, YStack } from "tamagui";
import { Program } from "../../../../types";
import { CAvatar } from "@/ui/views/user";

export const MentorCardAlt1 = React.memo(function ({
  programId,
}: {
  programId: string;
}) {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const [program, setProgram] = React.useState<Program>();

  React.useEffect(() => {
    const idx = parseInt(programId);
    setProgram(programs[idx]);
  }, [programId]);

  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handlePresentModalClose = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  if (!program) {
    return <></>;
  }

  return (
    <>
      <XStack
        gap={10}
        padding={10}
        backgroundColor={"white"}
        borderRadius={10}
        onPress={handlePresentModalPress}
      >
        <CAvatar avatar={program.avatar} />
        <YStack gap={5} justifyContent="center">
          <YStack>
            <Text
              fontSize={16}
              color={"rgba(26,26,26,1)"}
              fontFamily={"RedHatDisplay_700Bold"}
            >
              {program.mentorName}
            </Text>
            <Text
              color={"rgba(74,74,74,1)"}
              fontFamily={"RedHatText_500Medium"}
            >
              {program.mentorTitle}
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
              <CAvatar avatar={program.avatar} />
              <YStack alignItems="center">
                <Text
                  fontSize={16}
                  color={"rgba(26,26,26,1)"}
                  fontFamily={"RedHatDisplay_700Bold"}
                >
                  {program.mentorName}
                </Text>
                <Text
                  color={"rgba(74,74,74,1)"}
                  fontFamily={"RedHatText_500Medium"}
                >
                  {program.mentorTitle}
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
                {program.mentorBio}
              </Text>
            </YStack>
          </YStack>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
});
