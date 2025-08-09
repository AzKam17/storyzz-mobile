import { MenImagePlaceholder, WomenImagePlaceholder } from "@/ui/views/programs/mentor-image-placeholder.view";
import React from "react";
import { View, Text, YStack } from "tamagui";
import { Program } from "../../../../types";


export const SimilarProgramCard = React.memo(function (props: Program) {
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