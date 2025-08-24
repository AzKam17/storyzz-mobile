import React from "react";
import { AIChatMessage } from "../../../../types";
import { styled, Text, View, XStack } from "tamagui";
import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator } from "react-native";

const UserMessageText = styled(Text, {
  color: "white",
  backgroundColor: "#cd5c5c80",
  padding: 10,
  borderRadius: 10,
  alignSelf: "flex-end",
  borderBottomRightRadius: 0,
  marginTop: 5,
});

const AIMessageText = styled(Text, {
  color: "black",
});

export const AIChatView = React.memo(function ({
  messages,
}: {
  messages: AIChatMessage[];
}) {
  return (
    <View padding={15} height={250}>
      <FlashList
        data={messages}
        renderItem={({ item }) => {
          if (item.sender === "user") {
            return <UserMessageText>{item.body}</UserMessageText>;
          }

          return (
            <XStack gap={5} alignItems="flex-end">
              <View
                height={30}
                aspectRatio={1}
                backgroundColor={"#A3B899"}
                borderRadius={100}
              >
                <Text color={"white"} padding={5} textAlign="center">
                  A
                </Text>
              </View>
              <View
                backgroundColor={"#f3f4f6"}
                padding={10}
                borderRadius={10}
                alignSelf={"flex-start"}
                borderBottomLeftRadius={0}
                marginTop={5}
              >
                {item.loading ? (
                  <ActivityIndicator />
                ) : (
                  <AIMessageText>{item.body}</AIMessageText>
                )}
              </View>
            </XStack>
          );
        }}
      />
    </View>
  );
});
