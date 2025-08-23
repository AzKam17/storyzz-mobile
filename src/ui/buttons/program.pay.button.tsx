import { PrimaryButton } from "@/ui/buttons/primary.button";
import { styled, Text, View, XStack, YStack } from "tamagui";
import { BottomSheetBackdropView } from "@/ui/views/misc/bottom-sheet-backdrop.view";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React from "react";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { FormInput, Input1 } from "@/ui/inputs";
import { PaymentButton } from "@/ui/buttons/payment-method.button";

export interface PayButtonProps {
  programId: string;
  amount?: number;
  showToast?: boolean;
}

export const ProgramPayButton = React.memo(function ({
  amount,
  showToast,
}: PayButtonProps) {
  const [step, setStep] = React.useState<0 | 1 | 2>(0);
  const [paymentMethod, setPaymentMethod] = React.useState<
    "mobile" | "card" | null
  >(null);
  const pgDescSheetModalRef = React.useRef<BottomSheetModal>(null);
  const pgPaySheetModalRef = React.useRef<BottomSheetModal>(null);
  const pgSuccessSheetModalRef = React.useRef<BottomSheetModal>(null);

  React.useEffect(function () {
    setStep(0);
  }, []);

  const showToastFunc = React.useCallback(function () {
    alert("Inscription réussie");
  }, []);

  const showDescSheet = React.useCallback(function () {
    pgDescSheetModalRef.current?.present();
    return;
  }, []);

  const showPaySheet = React.useCallback(function () {
    pgDescSheetModalRef.current?.close();

    const timer = setTimeout(() => {
      pgPaySheetModalRef.current?.present();
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const closeSheet = React.useCallback(
    function () {
      if (step === 0) {
        pgDescSheetModalRef?.current?.close();
      } else if (step === 1) {
        pgPaySheetModalRef?.current?.close();
      } else if (step === 2) {
        pgSuccessSheetModalRef?.current?.close();
      }

      setStep(0);
      return;
    },
    [step]
  );

  return (
    <>
      <PrimaryButton onPress={showDescSheet}>
        <PrimaryButton.Text>Commencer</PrimaryButton.Text>
      </PrimaryButton>

      <BottomSheetModal
        ref={pgDescSheetModalRef}
        handleComponent={null}
        backdropComponent={BottomSheetBackdropView}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <SheetContainerView gap={10}>
            <SheetCloseButton onPress={closeSheet} />
            <SheetDescriptionText>Votre session</SheetDescriptionText>
            <View
              gap={10}
              padding={15}
              borderRadius={10}
              backgroundColor={"#f9fafb"}
            >
              <XStack justifyContent="space-between">
                <SheetText>Programme:</SheetText>
                <SheetTextH1>Devenez un pro du Storytelling</SheetTextH1>
              </XStack>
              <XStack justifyContent="space-between">
                <SheetText>Mentor:</SheetText>
                <SheetTextH1>Aya Konan</SheetTextH1>
              </XStack>
              <SheetSeparator />
              <XStack justifyContent="space-between">
                <SheetText fontSize={18}>Total:</SheetText>
                <SheetTextH1 fontSize={18}>50 000 Fcfa</SheetTextH1>
              </XStack>
            </View>
            <PrimaryButton onPress={showPaySheet}>
              <PrimaryButton.Text>Procéder au paiement</PrimaryButton.Text>
            </PrimaryButton>
            <XStack gap={10} justifyContent="center" alignItems="center">
              <Feather name="shield" size={16} color="#6b7280" />
              <SheetSubText>Paiement 100% sécurisé</SheetSubText>
            </XStack>
          </SheetContainerView>
        </BottomSheetView>
      </BottomSheetModal>

      <BottomSheetModal
        ref={pgPaySheetModalRef}
        handleComponent={null}
        backdropComponent={BottomSheetBackdropView}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <SheetContainerView gap={10}>
            <SheetCloseButton onPress={closeSheet} />
            <SheetDescriptionText>Paiement</SheetDescriptionText>
            <View gap={10} borderRadius={10}>
              <XStack gap={10}>
                <PaymentButton
                  active={paymentMethod === "mobile"}
                  onPress={() => setPaymentMethod("mobile")}
                >
                  <PaymentButton.Icon>
                    <Feather name="smartphone" />
                  </PaymentButton.Icon>
                  <PaymentButton.Text>Mobile Money</PaymentButton.Text>
                </PaymentButton>
                <PaymentButton
                  active={paymentMethod === "card"}
                  onPress={() => setPaymentMethod("card")}
                >
                  <PaymentButton.Icon>
                    <FontAwesome name="credit-card" />
                  </PaymentButton.Icon>
                  <PaymentButton.Text>Carte bancaire</PaymentButton.Text>
                </PaymentButton>
              </XStack>
              <YStack
                paddingVertical={10}
                display={paymentMethod === "mobile" ? "flex" : "none"}
              >
                <Input1
                  label="Numéro de téléphone"
                  placeholder="  07 00 00 00 00"
                  multiline={false}
                />
              </YStack>
              <YStack
                gap={10}
                paddingVertical={10}
                display={paymentMethod === "card" ? "flex" : "none"}
              >
                <Input1
                  label="Numéro de carte"
                  placeholder="  0000 0000 0000 0000"
                  multiline={false}
                />
                <XStack gap={10}>
                  <Input1
                    label="Expiration"
                    placeholder="  MM/AA"
                    multiline={false}
                  />
                  <Input1
                    label="CVC"
                    placeholder="  123"
                    multiline={false}
                  />
                </XStack>
              </YStack>
            </View>
            <PrimaryButton onPress={() => {}}>
              <PrimaryButton.Text>Payer 50 000 Fcfa</PrimaryButton.Text>
            </PrimaryButton>
          </SheetContainerView>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
});

const SheetCloseButton = React.memo(function ({
  onPress,
}: {
  onPress: () => void;
}) {
  return (
    <View position="absolute" padding={15} right={0} onPress={onPress}>
      <Entypo name="cross" size={24} color="#e5e7eb" />
    </View>
  );
});

const SheetContainerView = styled(View, {
  padding: 20,
});

const SheetSeparator = styled(View, {
  height: 0.75,
  backgroundColor: "#e5e7eb",
});

const SheetDescriptionText = styled(Text, {
  fontSize: 20,
  textAlign: "center",
  fontFamily: "RedHatDisplay_700Bold",
});

const SheetText = styled(Text, {
  color: "#4b5563",
  fontFamily: "RedHatDisplay_500Medium",
});

const SheetSubText = styled(Text, {
  fontSize: 13,
  color: "#6b7280",
  textAlign: "center",
  fontFamily: "RedHatText_500Medium",
});

const SheetTextH1 = styled(Text, {
  fontFamily: "RedHatDisplay_700Bold",
});
