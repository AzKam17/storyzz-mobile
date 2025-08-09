import { TabSectionText, TabSectionTitle } from "@/ui/texts";
import { Text, View } from "@tamagui/core";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, XStack, YStack } from "tamagui";
import { Program } from "../../../../types";
import {
  MenImagePlaceholder,
  WomenImagePlaceholder,
} from "@/ui/views/programs/mentor-image-placeholder.view";
import { programs } from "@/utils";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  programId: string;
};

const MentorCard = React.memo(function () {
  return (
    <YStack borderRadius={10}>
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
          Avec plus de 15 ans d'expérience, Aya Konan est une figure de proue du
          coaching en communication en Côte d'Ivoire...
        </Text>
      </YStack>
    </YStack>
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
    <YStack gap={15} paddingTop={15} >
      <YStack paddingRight={20}>
      <YStack gap={5}>
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
      <YStack gap={5}>
        <TabSectionTitle>Ce que vous apprendrez</TabSectionTitle>
        <XStack gap={10} alignItems="center" maxWidth={'80%'}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Développer une confiance inébranlable en prise de parole.
          </TabSectionText>
        </XStack>
        <XStack gap={10} alignItems="center" maxWidth={'80%'}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Structurer des récits qui captivent et persuadent.
          </TabSectionText>
        </XStack>
        <XStack gap={10} alignItems="center" maxWidth={'80%'}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Utiliser le langage corporel pour renforcer votre message.
          </TabSectionText>
        </XStack>
        <XStack gap={10} alignItems="center" maxWidth={'80%'}>
          <AntDesign name="checkcircleo" size={24} color="rgb(176 190 165)" />
          <TabSectionText>
            Adapter votre ton pour chaque type d'audience.
          </TabSectionText>
        </XStack>
      </YStack>
      <YStack gap={5}>
        <TabSectionTitle>Pour qui</TabSectionTitle>
        <TabSectionText>
          Idéal pour les entrepreneurs, les managers, les chefs de projet, et
          toute personne souhaitant améliorer son impact à l'oral. Que vous
          prépariez une présentation cruciale, un pitch pour des investisseurs
          ou que vous vouliez simplement être plus à l'aise en réunion, cette
          session est faite pour vous.
        </TabSectionText>
      </YStack>
      <YStack gap={5}>
        <TabSectionTitle>Votre mentor</TabSectionTitle>
        <MentorCard />
      </YStack></YStack>
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
