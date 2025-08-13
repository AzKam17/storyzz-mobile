import { Page } from "@/ui/views";
import { programs } from "@/utils";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { styled, Text, View } from "@tamagui/core";
import React from "react";
import { Program } from "../../../../types";
import { XStack, YStack, Image } from "tamagui";
import HeartSvg from "~/svg/HeartSvg";
import ClockSvg from "~/svg/ClockSvg";
import CameraSvg from "~/svg/CameraSvg";
import BookOpenSvg from "~/svg/BookOpenSvg";
import PersonGroupSvg from "~/svg/PersonGroupSvg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import {
  MenImagePlaceholder,
  WomenImagePlaceholder,
} from "@/ui/views/programs/mentor-image-placeholder.view";
import { PrimaryButton } from "@/ui/buttons";
import {
  Anchor,
  ScrollAnchorProvider,
  useScrollAnchor,
} from "@sellpy/react-native-scroll-anchor";
import { TabSectionTitle, TabSectionText } from "@/ui/texts";
import { MentorCard, MentorCardAlt1 } from "@/ui/views/mentor";
import { SimilarProgramCard } from "@/ui/views/programs/similar-program-card.view";
import { AntDesign } from "@expo/vector-icons";
import { RandomChildView } from "@/ui/views/misc";
import { LearnerFeedbackViewCarousel } from "@/ui/views/learner";

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

  // @ts-ignore
  const methods = useScrollAnchor(scrollViewRef);
  const { scrollTo, onScroll } = methods;

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

  const AnchorTabBar = React.memo(() => {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollTo("about")}
        >
          <Text style={styles.tabLabel}>À propos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollTo("learning")}
        >
          <Text style={styles.tabLabel}>Apprentissage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollTo("target-section")}
        >
          <Text style={styles.tabLabel}>Pour qui</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => scrollTo("mentor-section")}
        >
          <Text style={styles.tabLabel}>Mentor</Text>
        </TouchableOpacity>
      </View>
    );
  });

  const Header = React.useCallback(
    function ({ program }: { program: Program }) {
      return (
        <>
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

          <AnchorTabBar />
        </>
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
        <ScrollAnchorProvider {...methods}>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.contentContainer}
          >
            <Header program={program} />
            <YStack gap={20} paddingTop={10}>
              <Anchor name="about">
                <YStack gap={5} id="about-section">
                  <TabSectionTitle>À propos</TabSectionTitle>
                  <TabSectionText>
                    Ce programme intensif est conçu pour transformer votre
                    manière de communiquer. En s'appuyant sur les techniques des
                    plus grands orateurs, vous apprendrez à captiver votre
                    audience, à structurer vos idées avec clarté et à utiliser
                    votre voix pour inspirer confiance. Chaque module combine
                    théorie et exercices pratiques pour une progression rapide
                    et durable.
                  </TabSectionText>
                </YStack>
              </Anchor>

              <Anchor name="learning">
                <YStack gap={5} id="learning-section">
                  <TabSectionTitle>Ce que vous apprendrez</TabSectionTitle>
                  <XStack gap={10} alignItems="center" maxWidth={"80%"}>
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color="rgb(176 190 165)"
                    />
                    <TabSectionText>
                      Développer une confiance inébranlable en prise de parole.
                    </TabSectionText>
                  </XStack>
                  <XStack gap={10} alignItems="center" maxWidth={"80%"}>
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color="rgb(176 190 165)"
                    />
                    <TabSectionText>
                      Structurer des récits qui captivent et persuadent.
                    </TabSectionText>
                  </XStack>
                  <XStack gap={10} alignItems="center" maxWidth={"80%"}>
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color="rgb(176 190 165)"
                    />
                    <TabSectionText>
                      Utiliser le langage corporel pour renforcer votre message.
                    </TabSectionText>
                  </XStack>
                  <XStack gap={10} alignItems="center" maxWidth={"80%"}>
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color="rgb(176 190 165)"
                    />
                    <TabSectionText>
                      Adapter votre ton pour chaque type d'audience.
                    </TabSectionText>
                  </XStack>
                </YStack>
              </Anchor>

              <Anchor name="target-section">
                <YStack gap={5} id="target-section">
                  <TabSectionTitle>Pour qui</TabSectionTitle>
                  <TabSectionText>
                    Idéal pour les entrepreneurs, les managers, les chefs de
                    projet, et toute personne souhaitant améliorer son impact à
                    l'oral.
                  </TabSectionText>
                </YStack>
              </Anchor>

              <Anchor name="mentor-section">
                <YStack gap={5} id="mentor-section">
                  <TabSectionTitle>Votre mentor</TabSectionTitle>
                  <RandomChildView>
                    <MentorCard />
                    <MentorCardAlt1 />
                  </RandomChildView>
                </YStack>
              </Anchor>

              {/* <RandomChildView> */}
                <YStack gap={5} id="mentor-section">
                  <TabSectionTitle>Retour des apprenants</TabSectionTitle>
                  <LearnerFeedbackViewCarousel />
                </YStack>
              {/* </RandomChildView> */}

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
          </ScrollView>
        </ScrollAnchorProvider>
      </Page>
      <XStack
        gap={10}
        padding={10}
        paddingHorizontal={30}
        backgroundColor={"white"}
        paddingBottom={insets.bottom}
        alignItems="center"
        borderTopColor={"rgba(0, 0, 0, 0.1)"}
        borderTopWidth={1}
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
    paddingVertical: 10,
  },
  tabLabel: {
    fontFamily: "RedHatText_700Bold",
    fontSize: 14,
    color: "rgba(153, 77, 77, 1)",
  },
  contentContainerStyle: {
    gap: 20,
    paddingHorizontal: 20,
  },
});
