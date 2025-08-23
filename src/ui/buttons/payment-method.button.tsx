import React, {isValidElement, cloneElement} from "react";
import { Button, Text, styled, View, withStaticProperties, XStack } from "tamagui";

const ButtonFrame = styled(XStack, {
  name: 'Button',
  gap: 5,
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-start',
  height: 50,
  borderWidth: 2,
  borderRadius: 8,
  borderColor: "#e5e7eb",
  backgroundColor: "transparent",
  
  variants: {
    active: {
      true: {
        borderColor: 'rgba(255, 59, 48, 1)',
        backgroundColor: "#fff5f5",
      },
    },
  } as const,
})

const ButtonText = styled(Text, {
  name: 'ButtonText',
  color: 'black',
  fontFamily: 'RedHatText_700Bold',
})

const ButtonIcon = (props: { children: any }) => {
  return isValidElement(props.children) ? cloneElement(props.children, {
    // @ts-ignore
    size: 19,
    color: "#CD5C5C",
  }) : null
}

export const PaymentButton = withStaticProperties(ButtonFrame, {
  name: 'PrimaryButton',
  Text: ButtonText,
  Icon: ButtonIcon,
})