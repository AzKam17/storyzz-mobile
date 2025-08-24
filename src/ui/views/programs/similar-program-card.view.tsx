import {
  MenImagePlaceholder,
  WomenImagePlaceholder,
} from "@/ui/views/programs/mentor-image-placeholder.view";
import React from "react";
import { View, Text, YStack, XStack } from "tamagui";
import { Program } from "../../../../types";
import { CAvatar } from "@/ui/views/user";

export const SimilarProgramCard = React.memo(function (props: Program) {
  const { mentorGender, mentorName, programName, tag, avatar } = props;
  return (
    <YStack
      gap={5}
      maxWidth={250}
      paddingVertical={15}
      paddingHorizontal={15}
      backgroundColor={"white"}
      borderRadius={10}
    >
      <XStack justifyContent="center">
        <CAvatar avatar={avatar} height={70} width={70} />
      </XStack>
      <Text
        fontSize={15}
        fontFamily={"RedHatText_600SemiBold"}
        color={"rgba(153, 77, 77, 1)"}
        textAlign="center"
      >
        {mentorName}
      </Text>
      <Text
        fontSize={18}
        textAlign="center"
        fontFamily={"RedHatDisplay_900Black"}
        color={"rgba(0, 0, 0, 1)"}
      >
        {programName}
      </Text>
      <View
        padding={3}
        borderRadius={100}
        marginTop={10}
        paddingHorizontal={10}
        //backgroundColor={"rgba(242, 232, 232, 1)"}
        //alignSelf="flex-start"
      >
        <Text
          fontSize={13}
          fontFamily={"RedHatText_400Regular"}
          color={"rgba(26, 26, 26, 1)"}
          textAlign="center"
        >
          {tag}
        </Text>
      </View>
    </YStack>
  );
});
