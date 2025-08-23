import { PrimaryButton } from "@/ui/buttons";
import React from "react";

export interface PayButtonProps {
  amount?: number;
  showToast?: boolean;
}

export const PayButton = React.memo(function ({
  amount,
  showToast,
}: PayButtonProps) {

    const showToastFunc = React.useCallback(function(){
            alert('Inscription réussie')
    } ,[])

    const onPress = React.useCallback(function(){
        if(showToast){
            showToastFunc()
            return
        }
    }, [showToast, showToastFunc])
    
  return (
    <>
      <PrimaryButton onPress={onPress}>
        <PrimaryButton.Text>Commencer</PrimaryButton.Text>
      </PrimaryButton>
    </>
  );
});
