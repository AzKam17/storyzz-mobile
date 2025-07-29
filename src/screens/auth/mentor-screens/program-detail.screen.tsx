import { Page } from "@/ui/views";
import { programs } from "@/utils";
import { StaticScreenProps } from "@react-navigation/native";
import { Text } from "@tamagui/core";
import React from "react";
import { Program } from "../../../../types";
import { XStack, YStack } from "tamagui";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useWindowDimensions } from "react-native";

const AboutScreen = () => {
  return (
    <YStack>
      <Text>À propos</Text>
    </YStack>
  );
};

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    gap={50}
    indicatorStyle={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
    activeColor="rgba(0, 0, 0, 1)"
    inactiveColor="rgba(74, 74, 74, 1)"
    style={{ backgroundColor: "rgba(247, 243, 238, 1)" }}
  />
);

const routes = [
  { key: "about", title: "À propos" },
  { key: "schedule", title: "Apprentissage" },
  /* { key: "target-users", title: "Pour qui" },
  { key: "mentor", title: "Mentor" }, */
];

const renderScene = SceneMap({
  about: AboutScreen,
  schedule: AboutScreen,
});

type Props = StaticScreenProps<{
  programId: string;
}>;

export const ProgramDetailScreen = React.memo(function (props: Props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [program, setProgram] = React.useState<Program>();

  React.useEffect(() => {
    const { programId } = props.route.params;
    const idx = parseInt(programId);
    setProgram(programs[idx]);
  }, [props.route.params]);

  /* const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case "about":
        return <AboutScreen />;
      default:
        return <AboutScreen />;
    }
  }; */

  if (!program) {
    return null;
  }
  return (
    <Page hasBottom={false} style={{ paddingTop: 0 }}>
      <Text>{program.programName}</Text>
      <Text>{program.programDescription}</Text>
      <XStack justifyContent="space-between">
        <XStack>
          <Text>{program.mentorGender}</Text>
          <YStack>
            <Text>{program.mentorName}</Text>
            <Text>Experte en communication</Text>
          </YStack>
        </XStack>
        <XStack>
          <Text>700</Text>
        </XStack>
      </XStack>
      <XStack>
        <XStack>
          <Text>01h30</Text>
        </XStack>
        <XStack>
          <Text>Visio conférence</Text>
        </XStack>
      </XStack>
      <XStack>
        <XStack>
          <Text>Leadership</Text>
        </XStack>
        <XStack>
          <Text>50</Text>
        </XStack>
      </XStack>
      <YStack flex={1}>
        <TabView
          renderTabBar={renderTabBar}
          renderScene={renderScene}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={{ flex: 1 }}
        />
      </YStack>
    </Page>
  );
});
