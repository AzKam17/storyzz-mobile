import { TabSectionText, TabSectionTitle } from "@/ui/texts";
import { Text, View } from "@tamagui/core";
import { Image, ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, XStack, YStack } from "tamagui";
import { Program } from "../../../../types";
import {
  MenImagePlaceholder,
  WomenImagePlaceholder,
} from "@/ui/views/programs/mentor-image-placeholder.view";
import { programs } from "@/utils";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetBackdropView } from "@/ui/views/misc";

type Props = {
  programId: string;
};

const MentorCard = React.memo(function () {
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
            <View position="absolute" padding={15} right={0} onPress={handlePresentModalClose}>
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

const SimilarProgramCard = React.memo(function (props: Program) {
  const { mentorGender, mentorName, programName, tag } = props;
  return (
    <YStack
      gap={5}
      maxWidth={250}
      paddingVertical={15}
      paddingHorizontal={15}
      backgroundColor={"white"}
      borderRadius={10}
    >
      {mentorGender === "men" ? (
        <MenImagePlaceholder size={80} />
      ) : (
        <WomenImagePlaceholder size={80} />
      )}
      <Text
        fontSize={16}
        fontFamily={"RedHatText_600SemiBold"}
        color={"rgba(153, 77, 77, 1)"}
      >
        {mentorName}
      </Text>
      <Text
        fontSize={18}
        fontFamily={"RedHatDisplay_900Black"}
        color={"rgba(0, 0, 0, 1)"}
      >
        {programName}
      </Text>
      <View
        borderRadius={100}
        padding={3}
        paddingHorizontal={10}
        backgroundColor={"rgba(242, 232, 232, 1)"}
        alignSelf="flex-start"
      >
        <Text
          fontSize={13}
          fontFamily={"RedHatText_400Regular"}
          color={"rgba(26, 26, 26, 1)"}
        >
          {tag}
        </Text>
      </View>
    </YStack>
  );
});

export const ProgramDetailAboutScreen = React.memo(function (props: Props) {
  return (
    <YStack gap={20} paddingTop={10}>
      <YStack gap={5} id="learning-section">
        <TabSectionTitle>Ce que vous apprendrez</TabSectionTitle>
        <XStack gap={10} alignItems="center" maxWidth={"80%"}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Développer une confiance inébranlable en prise de parole.
          </TabSectionText>
        </XStack>
        <XStack gap={10} alignItems="center" maxWidth={"80%"}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Structurer des récits qui captivent et persuadent.
          </TabSectionText>
        </XStack>
        <XStack gap={10} alignItems="center" maxWidth={"80%"}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Utiliser le langage corporel pour renforcer votre message.
          </TabSectionText>
        </XStack>
        <XStack gap={10} alignItems="center" maxWidth={"80%"}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Adapter votre ton pour chaque type d'audience.
          </TabSectionText>
        </XStack>
      </YStack>
      
      <YStack gap={5} id="target-section">
        <TabSectionTitle>Pour qui</TabSectionTitle>
        <TabSectionText>
          Idéal pour les entrepreneurs, les managers, les chefs de projet, et
          toute personne souhaitant améliorer son impact à l'oral.
        </TabSectionText>
      </YStack>
      
      <YStack gap={5} id="mentor-section">
        <TabSectionTitle>Votre mentor</TabSectionTitle>
        <MentorCard />
      </YStack>
      <YStack
        gap={15}
        paddingVertical={20}
        backgroundColor={"rgba(242, 232, 232, 1)"}
      >
        <TabSectionTitle>Programmes similaires</TabSectionTitle>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {programs.map((e, idx) => (
            <SimilarProgramCard key={idx} {...e} />
          ))}
        </ScrollView>
      </YStack>
    </YStack>
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 20,
    paddingHorizontal: 20,
  },
});
