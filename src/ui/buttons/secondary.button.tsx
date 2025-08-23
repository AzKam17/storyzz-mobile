import React, { isValidElement, cloneElement } from "react";
import {
  Button,
  Text,
  styled,
  View,
  withStaticProperties,
  XStack,
} from "tamagui";

const ButtonFrame = styled(XStack, {
  name: "Button",
  gap: 10,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "flex-start",
  height: 50,
  borderRadius: 8,
  borderColor: "#e5e7eb",
  backgroundColor: "#f3f4f6",
});

const ButtonText = styled(Text, {
  name: "ButtonText",
  color: "black",
  fontFamily: "RedHatText_500Medium",
});

const ButtonIcon = (props: { children: any }) => {
  return isValidElement(props.children)
    ? cloneElement(props.children, {
        // @ts-ignore
        size: 19,
        color: "#CD5C5C",
      })
    : null;
};

export const SecondaryButton = withStaticProperties(ButtonFrame, {
  name: "PrimaryButton",
  Text: ButtonText,
  Icon: ButtonIcon,
});
