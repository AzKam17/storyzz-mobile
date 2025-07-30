import { Page } from "@/ui/views";
import { programs } from "@/utils";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { styled, Text, View } from "@tamagui/core";
import React from "react";
import { Program } from "../../../../types";
import { ScrollView, XStack, YStack } from "tamagui";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ProgramDetailAboutScreen } from "@/screens/auth/mentor-screens/program-detail-about.screen";
import { ProgramDetailMentorScreen } from "@/screens/auth/mentor-screens/program-detail-mentor.screen";
import { ProgramDetailScheduleScreen } from "@/screens/auth/mentor-screens/program-detail-schedule.screen";
import { ProgramDetailTargetUsersScreen } from "@/screens/auth/mentor-screens/program-detail-target-users.screen";
import {
  MenImagePlaceholder,
  WomenImagePlaceholder,
} from "@/ui/views/programs/mentor-image-placeholder.view";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  MaterialTabBar,
  Tabs,
  useCurrentTabScrollY,
} from "react-native-collapsible-tab-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PrimaryButton } from "@/ui/buttons";
import { Image } from "expo-image";
import HeartSvg from "~/svg/HeartSvg";
import ClockSvg from "~/svg/ClockSvg";
import CameraSvg from "~/svg/CameraSvg";
import BookOpenSvg from "~/svg/BookOpenSvg";
import PersonGroupSvg from "~/svg/PersonGroupSvg";
import { useAnimatedReaction } from "react-native-reanimated";

const ProgramTitleText = styled(Text, {
  fontSize: 24,
  fontFamily: "RedHatText_700Bold",
});

const ProgramDescriptionText = styled(Text, {
  fontSize: 20,
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
  const [index, setIndex] = React.useState(0);
  const [program, setProgram] = React.useState<Program>();

  // Position where the program title is located (approximately)
  const PROGRAM_TITLE_POSITION = 280; // Adjust based on your layout

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

  const ScrollTracker = React.memo(() => {
    const scrollY = useCurrentTabScrollY();

    useAnimatedReaction(
      () => scrollY.value,
      (currentScrollY) => {
        if (currentScrollY >= PROGRAM_TITLE_POSITION) {
          console.log("🎯 Program title reached the screen header!", {
            scrollY: currentScrollY,
            titlePosition: PROGRAM_TITLE_POSITION,
            programName: program?.programName,
          });
        }
      }
    );

    return null;
  });

  const Header = React.useCallback(
    function ({ program }: { program: Program }) {
      return (
        <YStack gap={13} paddingRight={20}>
          <Image
            source={require("~/images/default-image-women-large.png")}
            style={{ width: "100%", height: 215, borderRadius: 10 }}
          />
          <ProgramTitleText>{program.programName}</ProgramTitleText>
          <ProgramDescriptionText>
            {program.programDescription}
          </ProgramDescriptionText>
          <XStack justifyContent="space-between">
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
              <MiscText>700</MiscText>
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
        <Tabs.Container
          headerContainerStyle={{
            shadowColor: "rgba(0, 0, 0, 0)",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            backgroundColor: "rgba(247, 243, 238, 1)",
          }}
          renderHeader={() => <Header program={program} />}
          headerHeight={300}
          renderTabBar={(props) => {
            return (
              <MaterialTabBar
                {...props}
                activeColor="rgba(74, 74, 74, 1)"
                inactiveColor="rgba(153, 77, 77, 1)"
                scrollEnabled={true}
                indicatorStyle={{
                  backgroundColor: "rgba(0, 0, 0, 1)",
                }}
                labelStyle={{
                  fontFamily: "RedHatText_400Regular",
                }}
              />
            );
          }}
        >
          <Tabs.Tab name="A" label="A propos">
            <Tabs.ScrollView>
              <ScrollTracker />
              <ProgramDetailAboutScreen programId={programId} />
            </Tabs.ScrollView>
          </Tabs.Tab>

          <Tabs.Tab name="B" label="Apprentissage">
            <Tabs.ScrollView>
              <ScrollTracker />
              <ProgramDetailScheduleScreen programId={programId} />
            </Tabs.ScrollView>
          </Tabs.Tab>

          <Tabs.Tab name="C" label="Pour qui">
            <Tabs.ScrollView>
              <ScrollTracker />
              <ProgramDetailTargetUsersScreen programId={programId} />
            </Tabs.ScrollView>
          </Tabs.Tab>

          <Tabs.Tab name="D" label="Mentor">
            <Tabs.ScrollView>
              <ScrollTracker />
              <ProgramDetailMentorScreen programId={programId} />
            </Tabs.ScrollView>
          </Tabs.Tab>
        </Tabs.Container>
      </Page>

      <XStack
        gap={10}
        padding={10}
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
          <PrimaryButton>Commencer</PrimaryButton>
        </View>
      </XStack>
    </>
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 15,
    paddingBottom: 20,
  },
});
