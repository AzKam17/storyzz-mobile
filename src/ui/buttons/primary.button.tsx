import React from "react";
import { ActivityIndicator } from "react-native";
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
  },

  variants: {
    loading: {
      true: {
        backgroundColor: "rgb(173, 142, 151)",
      },
    },
  }
})

export const PButtonText = styled(Text, {
  name: 'ButtonText',
  color: 'rgba(255, 255, 255, 1)',
  fontFamily: 'RedHatText_700Bold',
})

const PrimaryButtonImpl = React.forwardRef<
  React.ElementRef<typeof PButtonFrame>,
  React.ComponentProps<typeof PButtonFrame> & { loading?: boolean; children?: React.ReactNode }
>(({ loading, children, ...props }, ref) => {
  return (
    <PButtonFrame ref={ref} loading={loading} {...props}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <PButtonText>{children}</PButtonText>
      )}
    </PButtonFrame>
  );
});

export const PrimaryButton = withStaticProperties(PrimaryButtonImpl, {
  name: 'PrimaryButton',
  Text: PButtonText,
})