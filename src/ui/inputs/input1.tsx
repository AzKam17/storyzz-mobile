import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { styled, Text, YStack } from "tamagui";

const InputLabel = styled(Text, {
    fontFamily: "RedHatText_500Medium"
})

type Props = TextInputProps & {
  label?: string;
};

export const Input1 = React.memo(function (props: Props) {
  const { label, ...rest } = props;
  return (
    <YStack flex={1} gap={3}>
      {label && <InputLabel>{label}</InputLabel>}
      <TextInput
        placeholderTextColor={"rgb(156, 163, 175)"}
        style={[styles.input]}
        {...rest}
      />
    </YStack>
  );
});

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#f3f4f6",
    fontFamily: "RedHatText_500Medium",
  },
});
