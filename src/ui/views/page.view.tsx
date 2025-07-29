import React from "react";
import {ViewStyle, StyleProp } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styled, YStack } from "tamagui";

const CPage = styled(YStack, {
  flex: 1,
  gap: 10,
  paddingHorizontal: 10,
  backgroundColor: "rgba(247, 243, 238, 1)",
});

export const Page = React.memo(function ({
  children,
  hasBottom,
  style
}: {
  hasBottom?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const insets = useSafeAreaInsets();
  return (
    <CPage
      paddingTop={insets.top}
      paddingBottom={hasBottom ? 0 : insets.bottom}
      style={style}
    >
      {children || <></>}
    </CPage>
  );
});