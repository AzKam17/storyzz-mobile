import CancelSvg from "@/assets/svg/CancelSvg";
import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps } from "react-native";
import { View } from "tamagui";

export const SearchBarInput = React.memo(function (props: TextInputProps) {
  const [focused, setFocused] = React.useState<boolean>(false);

  const clearInput = React.useCallback(function () {
    if(!props.onChangeText) return

    props.onChangeText("");
  }, [props.value, props.onChangeText]);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  const viewColor = React.useMemo(
    () => (focused ? "rgba(229, 75, 75, 1)" : "rgba(229, 229, 234, 1)"),
    [focused]
  );
  const iconColor = React.useMemo(
    () => (focused ? "rgba(229, 75, 75, 1)" : "rgba(26, 26, 26, 1)"),
    [focused]
  );

  return (
    <View
      gap={10}
      borderRadius={100}
      flexDirection="row"
      backgroundColor={"white"}
      alignItems="center"
      paddingHorizontal={15}
      paddingVertical={10}
      borderColor={viewColor}
      borderWidth={1.5}
    >
      <Fontisto name="zoom" size={24} color={iconColor} />
      <View flex={1}>
        <TextInput
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Rechercher un mentor, un programme..."
          placeholderTextColor={"rgba(169, 169, 169, 1)"}
          style={styles.input}
          {...props}
        />
      </View>
      {!!props.value && <Pressable onPress={clearInput}><CancelSvg /></Pressable>}
    </View>
  );
});

const styles = StyleSheet.create({
  input: {},
});
