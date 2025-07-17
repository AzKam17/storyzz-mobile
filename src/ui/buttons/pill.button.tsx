import * as Haptics from "expo-haptics";
import React from "react";
import { styled, Text, View } from "tamagui";

type PillProps = {
  label: string;
  onPress?: (value: string) => void;
  isActive?: (value: string) => boolean;
  textColor?: string;
};

// Styled wrapper to make it look like a pill
const PillContainer = styled(View, {
  height: 30,
  borderRadius: 9999,
  paddingHorizontal: 12,
  paddingVertical: 6,
  backgroundColor: "#e0e0e0",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  onPressIn: (ev) => {
    if (process.env.EXPO_OS === "ios") {
      // Add a soft haptic feedback when pressing down on the tabs.
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  },
});

const PillText = styled(Text, {
  fontSize: 14,
  fontWeight: "500",
  color: "#333",
});

const activeBg = "rgba(26, 26, 26, 1)";
const inactiveBg = "rgba(220, 252, 231, 1)";

const activeTextColor = "rgba(255, 255, 255, 1)";
const inactiveTextColor = "rgba(28, 13, 13, 1)";

export const Pill = ({ label, onPress, isActive }: PillProps) => {

  const isPillActive = React.useMemo(function(){
    if(!isActive) return false

    return isActive(label)
  }, [label, onPress, isActive])

  const handlePress = React.useCallback(() => {
    onPress?.(label);
  }, [onPress, label, isActive]);

  const backgroundColor = React.useMemo(
    () => (isPillActive ? activeBg : inactiveBg),
    [isActive]
  );

  const textColor = React.useMemo(
    () => (isPillActive ? activeTextColor : inactiveTextColor),
    [isPillActive]
  );

  return (
    <PillContainer onPress={handlePress} backgroundColor={backgroundColor}>
      <PillText color={textColor}>{label}</PillText>
    </PillContainer>
  );
};