import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styled, YStack } from "tamagui";

const CPage = styled(YStack, {
  flex: 1,
  paddingHorizontal: 10,
  backgroundColor: "white",
});

export const Page = React.memo(function ({
  children,
  hasBottom,
}: {
  hasBottom?: boolean;
  children?: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  return (
    <CPage
      paddingTop={insets.top}
      paddingBottom={hasBottom ? insets.bottom : 0}
    >
      {children || <></>}
    </CPage>
  );
});
