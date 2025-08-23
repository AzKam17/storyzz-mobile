import React from "react";
import { Button, Text, styled, View, withStaticProperties } from "tamagui";

export const PButtonFrame = styled(View, {
  name: 'Button',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  height: 50,
  borderRadius: 8,
  backgroundColor: "rgba(255, 59, 48, 1)",
  disabledStyle: {
    backgroundColor: "rgba(169, 169, 169, 1)",
  },
  pressStyle:{
    backgroundColor: "rgba(255, 59, 48, 0.8)",
  }
})

export const PButtonText = styled(Text, {
  name: 'ButtonText',
  color: 'rgba(255, 255, 255, 1)',
  fontFamily: 'RedHatText_700Bold',
})

export const PrimaryButton = withStaticProperties(PButtonFrame, {
  name: 'PrimaryButton',
  Text: PButtonText,
})