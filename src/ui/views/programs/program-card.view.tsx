import { MenImagePlaceholder, WomenImagePlaceholder } from "@/ui/views/programs/mentor-image-placeholder.view";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styled, Text, XStack, YStack } from "tamagui";

const OuterView = styled(XStack, {
  gap: 5,
  padding: 10,
  borderRadius: 12,
  backgroundColor: "white",
  marginBottom: 15,
});

const MentorTitle = styled(Text, {
  fontSize: 14,
  fontFamily: "RedHatText_600SemiBold",
  color: "rgba(153, 77, 77, 1)",
});
const ProgramTitle = styled(Text, {
  fontSize: 17,
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

type Props = {
  id: number;
  mentorGender: string;
  mentorName: string;
  programName: string;
  programDescription: string;
  tag: string;
};

export const ProgramCardView = React.memo(function (props: Props) {
  const { mentorGender, mentorName, programName, programDescription, tag } =
    props;
  const navigation = useNavigation();

  const goToProgramDetail = React.useCallback(
    function () {
      navigation.navigate("auth", {
        screen: "program",
        params: { screen: "detail", params: { programId: `${props.id}` } },
      });
    },
    [props]
  );

  return (
    <OuterView onPress={goToProgramDetail}>
      <YStack flex={1} justifyContent="center">
        {mentorGender === "men" ? (
          <MenImagePlaceholder size={80} />
        ) : (
          <WomenImagePlaceholder size={80} />
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
