import React from "react";
import { TextInput, TextInputProps, View, StyleSheet, TextStyle } from "react-native";
import { InputProps, styled, Text, XStack, YStack } from "tamagui";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const InputTitle = styled(Text, {
  color: "rgba(74, 74, 74, 1)",
  fontFamily: "RedHatText_400Regular",
});

const ErrorText = styled(Text, {
  color: "rgba(255, 59, 48, 1)",
  fontFamily: "RedHatText_400Regular",
});

interface Props {
  title?: string;
  error?: string;
  inputProps?: TextInputProps;
}

export const FormInput = React.memo(function ({
  title,
  error,
  inputProps,
}: Props) {
  const mergedInputProps: TextInputProps = React.useMemo(() => {
    const baseStyle: TextStyle = {
      fontSize: 16,
    };
    
    return {
      ...inputProps,
      style: [
        baseStyle,
        inputProps?.style,
      ],
    };
  }, [inputProps]);

  return (
    <YStack gap={5}>
      <InputTitle>{title}</InputTitle>
      <View style={[styles.inputContainer, !!error && styles.inputContainerErr]}>
        <View style={{ flex: 1 }}>
          <TextInput {...mergedInputProps} />
        </View>
        {error && (
          <MaterialIcons name="error" size={24} color="rgba(255, 59, 48, 1)" />
        )}
      </View>
      <ErrorText>{error}</ErrorText>
    </YStack>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 3,
    borderColor: "white",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  inputContainerErr:{
    borderColor: "rgba(255, 59, 48, 1)",
  }
});
