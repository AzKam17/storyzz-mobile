import { BottomSheetBackdropView } from "@/ui/views/misc";
import { programs } from "@/utils";
import { Entypo } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React from "react";
import { ImageBackground } from "react-native";
import { Image, Text, View, YStack } from "tamagui";
import { Program } from "../../../../types";

export const MentorCard = React.memo(function ({
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
    return null;
  }

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
            {`${program.mentorBio.slice(0, 100)}...`}
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
                textAlign="center"
                fontSize={25}
                color={"rgba(153, 77, 77, 1)"}
                fontFamily={"RedHatText_600SemiBold"}
              >
                {program.mentorName}
              </Text>
              <Text
                textAlign="center"
                fontSize={15}
                color={"rgba(74, 74, 74, 1)"}
                fontFamily={"RedHatText_400Regular"}
              >
                {program.mentorTitle}
              </Text>
            </YStack>
            <Text
              fontSize={15}
              color={"rgba(74, 74, 74, 1)"}
              fontFamily={"RedHatText_400Regular"}
            >
              {program.mentorBio}
            </Text>
          </YStack>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
});
