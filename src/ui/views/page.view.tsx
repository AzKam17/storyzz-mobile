import React from "react";
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
}: {
  children?: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  return (
    <CPage
      paddingTop={insets.top}
      paddingBottom={insets.bottom}
    >
      {children || <></>}
    </CPage>
  );
});