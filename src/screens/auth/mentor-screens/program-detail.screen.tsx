import { Page } from "@/ui/views";
import { programs } from "@/utils";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { styled, Text, View } from "@tamagui/core";
import React from "react";
import { Program } from "../../../../types";
import { ScrollView, XStack, YStack, Image } from "tamagui";
import { ProgramDetailAboutScreen } from "@/screens/auth/mentor-screens/program-detail-about.screen";
//import { Image } from "expo-image";
import HeartSvg from "~/svg/HeartSvg";
import ClockSvg from "~/svg/ClockSvg";
import CameraSvg from "~/svg/CameraSvg";
import BookOpenSvg from "~/svg/BookOpenSvg";
import PersonGroupSvg from "~/svg/PersonGroupSvg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity, StyleSheet } from "react-native";
import {
  MenImagePlaceholder,
  WomenImagePlaceholder,
} from "@/ui/views/programs/mentor-image-placeholder.view";
import { PrimaryButton } from "@/ui/buttons";

const ProgramTitleText = styled(Text, {
  fontSize: 24,
  color: "rgba(0, 0, 0, 1)",
  fontFamily: "RedHatText_700Bold",
});

const ProgramDescriptionText = styled(Text, {
  fontSize: 17,
  color: "rgba(74, 74, 74, 1)",
  fontFamily: "RedHatText_400Regular",
});

const MentorNameText = styled(Text, {
  fontSize: 16,
  color: "rgba(153, 77, 77, 1)",
  fontFamily: "RedHatText_600SemiBold",
});

const MentorJobText = styled(Text, {
  fontSize: 16,
  color: "rgba(74, 74, 74, 1)",
  fontFamily: "RedHatText_400Regular",
});

const MiscText = styled(Text, {
  fontSize: 16,
  color: "rgba(74, 74, 74, 1)",
  fontFamily: "RedHatText_400Regular",
});

type Props = StaticScreenProps<{
  programId: string;
}>;

export const ProgramDetailScreen = React.memo(function (props: Props) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { programId } = props.route.params;
  const [program, setProgram] = React.useState<Program>();
  const scrollViewRef = React.useRef<ScrollView>(null);

  // Section positions - you'll need to adjust these based on your layout
  const SECTION_POSITIONS = {
    learning: 400, // Position of "Ce que vous apprendrez"
    target: 800, // Position of "Pour qui"
    mentor: 1200, // Position of "Votre mentor"
  };

  React.useEffect(() => {
    const { programId } = props.route.params;
    const idx = parseInt(programId);
    setProgram(programs[idx]);
  }, [props.route.params]);

  React.useLayoutEffect(() => {
    if (!program) return;
    navigation.setOptions({
      headerTitle: program.programName,
    });
  }, [program]);

  const scrollToSection = React.useCallback((position: number) => {
    scrollViewRef.current?.scrollTo({
      y: position,
      animated: true,
    });
  }, []);

  const AnchorTabBar = React.memo(() => {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollToSection(SECTION_POSITIONS.learning)}
        >
          <Text style={styles.tabLabel}>À propos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollToSection(SECTION_POSITIONS.learning)}
        >
          <Text style={styles.tabLabel}>Apprentissage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollToSection(SECTION_POSITIONS.target)}
        >
          <Text style={styles.tabLabel}>Pour qui</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollToSection(SECTION_POSITIONS.mentor)}
        >
          <Text style={styles.tabLabel}>Mentor</Text>
        </TouchableOpacity>
      </View>
    );
  });

  const Header = React.useCallback(
    function ({ program }: { program: Program }) {
      return (
        <YStack gap={20} paddingVertical={15}>
          <Image
            source={require("~/images/default-image-women-large.png")}
            style={{ width: "100%", height: 215, borderRadius: 10 }}
          />
          <ProgramTitleText>{program.programName}</ProgramTitleText>
          <ProgramDescriptionText>
            {program.programDescription}
          </ProgramDescriptionText>
          <XStack justifyContent="space-between" alignItems="center">
            <XStack gap={10}>
              {program.mentorGender === "men" ? (
                <MenImagePlaceholder size={40} />
              ) : (
                <WomenImagePlaceholder size={40} />
              )}
              <YStack>
                <MentorNameText>{program.mentorName}</MentorNameText>
                <MentorJobText>Experte en communication</MentorJobText>
              </YStack>
            </XStack>
            <XStack gap={5}>
              <HeartSvg />
              <MiscText>4.8</MiscText>
            </XStack>
          </XStack>
          <XStack gap={20}>
            <XStack gap={5}>
              <ClockSvg />
              <MiscText>01h30</MiscText>
            </XStack>
            <XStack gap={5}>
              <CameraSvg />
              <MiscText>Visio conférence</MiscText>
            </XStack>
          </XStack>
          <XStack gap={20}>
            <XStack gap={5}>
              <BookOpenSvg />
              <MiscText>Leadership</MiscText>
            </XStack>
            <XStack gap={5}>
              <PersonGroupSvg />
              <MiscText>50</MiscText>
            </XStack>
          </XStack>
        </YStack>
      );
    },
    [props]
  );

  if (!program) {
    return null;
  }

  return (
    <>
      <Page hasBottom={true} style={{ paddingTop: 0 }}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.contentContainer}
        >
          <Header program={program} />
          <AnchorTabBar />
          <ProgramDetailAboutScreen programId={programId} />
        </ScrollView>
      </Page>
      <XStack
        gap={10}
        padding={10}
        paddingHorizontal={30}
        backgroundColor={"white"}
        paddingBottom={insets.bottom}
        alignItems="center"
      >
        <View flex={1}>
          <Text fontSize={18} fontFamily={"RedHatText_400Regular"}>
            Prix de la session
          </Text>
          <Text fontSize={20} fontFamily={"RedHatDisplay_900Black"}>
            50 000 FCFA
          </Text>
        </View>
        <View flex={1}>
          <PrimaryButton>
            <PrimaryButton.Text>Commencer</PrimaryButton.Text>
          </PrimaryButton>
        </View>
      </XStack>
    </>
  );
});

const styles = StyleSheet.create({
  contentContainer: {},
  tabBar: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(247, 243, 238, 1)",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  tabItem: {
    //flex:1,
    paddingVertical: 10,
    //paddingHorizontal: 16,
  },
  tabLabel: {
    fontFamily: "RedHatText_700Bold",
    fontSize: 14,
    color: "rgba(153, 77, 77, 1)",
  },
});
