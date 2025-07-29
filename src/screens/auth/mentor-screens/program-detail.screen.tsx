import { Page } from "@/ui/views";
import { programs } from "@/utils";
import { StaticScreenProps } from "@react-navigation/native";
import { styled, Text } from "@tamagui/core";
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

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
    activeColor="rgba(0, 0, 0, 1)"
    inactiveColor="rgba(74, 74, 74, 1)"
    style={{ backgroundColor: "rgba(247, 243, 238, 1)" }}
    labelStyle={{
      fontSize: 12,
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: 14,
      fontFamily: "RedHatText_700Bold",
    }}
    tabStyle={{
      width: "auto",
      minWidth: 80,
      paddingHorizontal: 8,
    }}
    scrollEnabled={true}
  />
);

const routes = [
  { key: "about", title: "À propos" },
  { key: "schedule", title: "Apprentissage" },
  { key: "targetUsers", title: "Pour qui" },
  { key: "mentor", title: "Mentor" },
];

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
  const { programId } = props.route.params;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [program, setProgram] = React.useState<Program>();

  React.useEffect(() => {
    const { programId } = props.route.params;
    const idx = parseInt(programId);
    setProgram(programs[idx]);
  }, [props.route.params]);

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case "about":
        return <ProgramDetailAboutScreen programId={programId} />;
      case "schedule":
        return <ProgramDetailScheduleScreen programId={programId} />;
      case "targetUsers":
        return <ProgramDetailTargetUsersScreen programId={programId} />;
      case "mentor":
        return <ProgramDetailMentorScreen programId={programId} />;
      default:
        return null;
    }
  };

  if (!program) {
    return null;
  }
  return (
    <Page hasBottom={false} style={{ paddingTop: 0 }}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
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
          <XStack>
            <MiscText>700</MiscText>
          </XStack>
        </XStack>
        <XStack>
          <XStack>
            <MiscText>01h30</MiscText>
          </XStack>
          <XStack>
            <MiscText>Visio conférence</MiscText>
          </XStack>
        </XStack>
        <XStack>
          <XStack>
            <MiscText>Leadership</MiscText>
          </XStack>
          <XStack>
            <MiscText>50</MiscText>
          </XStack>
        </XStack>
        <YStack height={layout.height}>
          <TabView
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width, }}
          />
        </YStack>
      </ScrollView>
    </Page>
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 15,
    paddingBottom: 20
  },
});
