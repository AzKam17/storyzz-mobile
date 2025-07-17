import { Image } from "expo-image";
import React from "react";
import { styled, Text, XStack, YStack } from "tamagui";

const OuterView = styled(XStack, {
  gap: 30,
  padding: 16,
  borderRadius: 12,
  backgroundColor: "white",
  marginBottom: 15
});

const MentorTitle = styled(Text, {
  fontSize: 16,
  fontFamily: "RedHatText_600SemiBold",
  color: "rgba(153, 77, 77, 1)",
});
const ProgramTitle = styled(Text, {
  fontSize: 18,
  fontFamily: "RedHatDisplay_900Black",
  color: "rgba(0, 0, 0, 1)",
});
const DescriptionTitle = styled(Text, {
  fontSize: 13,
  fontFamily: "RedHatText_400Regular",
  color: "rgb(116, 79, 79)",
});

const Tag = styled(Text, {
  fontSize: 13,
  fontFamily: "RedHatText_400Regular",
  color: "rgba(26, 26, 26, 1)",
  alignSelf: "flex-start",
  paddingHorizontal: 10,
  paddingVertical: 2,
  borderRadius: 12,
  backgroundColor: "rgba(242, 232, 232, 1)",
});

const MenImagePlaceholder = React.memo(function () {
  return (
    <Image
      source={require("~/images/default-image-men.png")}
      style={{ width: 100, height: 100, borderRadius: 100 }}
    />
  );
});

const WomenImagePlaceholder = React.memo(function () {
  return (
    <Image
      source={require("~/images/default-image-women.png")}
      style={{ width: 100, height: 100, borderRadius: 100 }}
    />
  );
});

type Props = {
  mentorGender: string;
  mentorName: string;
  programName: string;
  programDescription: string;
  tag: string;
};

export const ProgramCardView = React.memo(function (props: Props) {
  const { mentorGender, mentorName, programName, programDescription, tag } =
    props;
  return (
    <OuterView>
      <YStack flex={1} justifyContent="center">
        {mentorGender === "men" ? (
          <MenImagePlaceholder />
        ) : (
          <WomenImagePlaceholder />
        )}
      </YStack>
      <YStack flex={3} gap={5}>
        <MentorTitle>{mentorName}</MentorTitle>
        <ProgramTitle>{programName}</ProgramTitle>
        <DescriptionTitle>{programDescription}</DescriptionTitle>
        <Tag>{tag}</Tag>
      </YStack>
    </OuterView>
  );
});