import { programs } from "@/utils";
import React from "react";
import {Image} from 'expo-image'
import { View, Text, ScrollView, YStack, XStack } from "tamagui";
import { Program, Testimonial } from "../../../../types";


export const LearnerFeedbackCarouselItem = React.memo(function (
  props: Testimonial
) {
  return (
    <YStack
      gap={10}
      padding={20}
      backgroundColor={"white"}
      borderRadius={10}
      maxWidth={300}
      minHeight={150}
    >
      <YStack flex={2}>
        <Text fontFamily={"RedHatDisplay_500Medium"} color={"#4a4a4a"}>
          "{props.text}"
        </Text>
      </YStack>
      <View style={{ height: 1, backgroundColor: "#E5E5EA" }} />
      <XStack flex={1} gap={10} alignItems="center">
        <Image
          source={props.avatar}
          style={{ height: 40, width: 40, borderRadius: 100 }}
        />
        <YStack>
          <Text color={"rgb(26,26,26)"} fontFamily={"RedHatDisplay_500Medium"}>
            {props.learnerName}
          </Text>
          <Text color={"rgb(74,74,74)"} fontFamily={"RedHatDisplay_500Medium"}>
            {props.learnerTitle}
          </Text>
        </YStack>
      </XStack>
    </YStack>
  );
});

export const LearnerFeedbackViewCarousel = React.memo(function ({
  programId,
}: {
  programId: string;
}) {
  const [program, setProgram] = React.useState<Program>();

  React.useEffect(() => {
    const idx = parseInt(programId);
    setProgram(programs[idx]);
  }, [programId]);

  if (!program) {
    return <></>;
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    >
      {program.testimonials.map((item, idx) => (
        <LearnerFeedbackCarouselItem key={idx} {...item} />
      ))}
    </ScrollView>
  );
});
