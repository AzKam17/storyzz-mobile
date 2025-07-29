import React from "react";
import { Button, styled } from "tamagui";


export const PrimaryButton = styled(Button, {
  width: '100%', 
  backgroundColor: "rgba(255, 59, 48, 1)",
  fontFamily: 'RedHatText_400Regular',
  color: "white",
  '$color': "white",
  disabledStyle: {
    backgroundColor: "rgba(169, 169, 169, 1)",
  },
  pressStyle:{
    backgroundColor: "rgba(255, 59, 48, 0.8)",
  }
})
