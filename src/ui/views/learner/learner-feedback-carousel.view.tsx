import React from "react";
import { Image, View, Text, ScrollView, YStack, XStack } from "tamagui";

const feedbacks = [
  {
    avatar: "~/images/avatar1.png",
    learnerName: "Marc K.",
    learnerTitle: "Développeur Freelance",
    text: "J'ai doublé mon rendement en appliquant les principes d'Edith. C'est simple, direct et incroyablement efficace. Je ne me sens plus jamais dépassé.",
  },

  {
    avatar: "~/images/avatar1.png",
    learnerName: "Carine A.",
    learnerTitle: "Chef de Projet",
    text: "Ce programme a changé ma vie professionnelle. J'ai appris à dire non et à me concentrer sur ce qui compte vraiment. Mon stress a diminué de moitié.",
  },

  {
    avatar: "~/images/avatar1.png",
    learnerName: "Lucas D.",
    learnerTitle: "Consultant Junior",
    text: "Une révélation ! Les outils sont directement applicables et ont un impact immédiat sur ma charge de travail quotidienne.",
  },

  {
    avatar: "~/images/avatar1.png",
    learnerName: "Sophie M.",
    learnerTitle: "Entrepreneure",
    text: "Grâce à Edith, j'ai enfin un système qui tient la route. Je gagne au moins 10 heures par semaine. Indispensable.",
  },
];

type ItemProps = {
  avatar: string;
  learnerName: string;
  learnerTitle: string;
  text: string;
};

export const LearnerFeedbackCarouselItem = React.memo(function (
  props: ItemProps
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
          source={require("~/images/avatar1.png")}
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

export const LearnerFeedbackViewCarousel = React.memo(function () {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    >
      {feedbacks.map((item, idx) => (
        <LearnerFeedbackCarouselItem key={idx} {...item} />
      ))}
    </ScrollView>
  );
});
