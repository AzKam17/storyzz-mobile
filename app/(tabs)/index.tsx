import { StyleSheet } from "react-native";

import { Pill } from "@/components/buttons/Pill.Button";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { XStack } from "tamagui";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <XStack
      flex={1}
      flexWrap="wrap"
      backgroundColor="#fff"
      style={{
        width: '100%',
        paddingTop: insets.top,
        paddingHorizontal: 10
      }}
    >
      <Pill label={"Aziz"} />
    </XStack>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
