import { PrimaryButton } from "@/ui/buttons/primary.button";
import { styled, Text, View, XStack, YStack } from "tamagui";
import { BottomSheetBackdropView } from "@/ui/views/misc/bottom-sheet-backdrop.view";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React from "react";
import { Entypo, Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { FormInput, Input1 } from "@/ui/inputs";
import { PaymentButton } from "@/ui/buttons/payment-method.button";
import { SecondaryButton } from "@/ui/buttons/secondary.button";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export interface PayButtonProps {
  programId: string;
  amount?: number;
  showToast?: boolean;
}

export const ProgramPayButton = React.memo(function ({
  amount,
  showToast,
}: PayButtonProps) {
  const navigation = useNavigation();
  const [step, setStep] = React.useState<0 | 1 | 2>(0);
  const [paymentMethod, setPaymentMethod] = React.useState<"mobile" | "card">(
    "mobile"
  );
  const pgDescSheetModalRef = React.useRef<BottomSheetModal>(null);
  const pgPaySheetModalRef = React.useRef<BottomSheetModal>(null);
  const pgSuccessSheetModalRef = React.useRef<BottomSheetModal>(null);

  React.useEffect(function () {
    setStep(0);
  }, []);

  const showToastFunc = React.useCallback(function () {
    if (!showToast) return;

    Toast.show({
      type: "successRegisterProgram",
      text1: "Inscription réussie",
      props: {
        style: {
          backgroundColor: "green",
        },
      },
    });
  }, []);

  const showDescSheet = React.useCallback(function () {
    if (showToast) {
      showToastFunc();
      return;
    }
    pgDescSheetModalRef.current?.present();
    return;
  }, []);

  const showPaySheet = React.useCallback(function () {
    setStep(1);
    pgDescSheetModalRef.current?.close();

    const timer = setTimeout(() => {
      pgPaySheetModalRef.current?.present();
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const showSuccessSheet = React.useCallback(function () {
    setStep(2);
    pgPaySheetModalRef.current?.close();

    const timer = setTimeout(() => {
      pgSuccessSheetModalRef.current?.present();
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

  const goToHomePage = React.useCallback(function () {
    setStep(0);
    pgSuccessSheetModalRef?.current?.close();

    const timer = setTimeout(() => {
      navigation.navigate("auth", {
        screen: "bottom_navigator",
        params: { screen: "home" },
      });
    }, 250);

    return () => clearTimeout(timer);
  }, []);

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
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
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
                  bottomSheet={true}
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
                  bottomSheet={true}
                  label="Numéro de carte"
                  placeholder="  0000 0000 0000 0000"
                  multiline={false}
                />
                <XStack gap={10}>
                  <Input1
                    bottomSheet={true}
                    label="Expiration"
                    placeholder="  MM/AA"
                    multiline={false}
                  />
                  <Input1
                    bottomSheet={true}
                    label="CVC"
                    placeholder="  123"
                    multiline={false}
                  />
                </XStack>
              </YStack>
            </View>
            <PrimaryButton onPress={showSuccessSheet}>
              <PrimaryButton.Text>Payer 50 000 Fcfa</PrimaryButton.Text>
            </PrimaryButton>
          </SheetContainerView>
        </BottomSheetView>
      </BottomSheetModal>

      <BottomSheetModal
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        ref={pgSuccessSheetModalRef}
        handleComponent={null}
        backdropComponent={BottomSheetBackdropView}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <SheetContainerView gap={15}>
            <SheetCloseButton onPress={closeSheet} />
            <View
              backgroundColor={"#e0f3ec"}
              alignSelf="center"
              padding={20}
              borderRadius={100}
            >
              <View backgroundColor={"#34c759"} padding={10} borderRadius={100}>
                <FontAwesome5 name="check" size={24} color="white" />
              </View>
            </View>
            <YStack gap={10}>
              <SheetDescriptionText>Félicitations !</SheetDescriptionText>
              <SheetText textAlign="center">
                Votre place est réservée pour la session "Devenez un pro du
                Storytelling".
              </SheetText>
            </YStack>
            <YStack gap={10}>
              <PrimaryButton onPress={goToHomePage}>
                <PrimaryButton.Text>Retourner à l'accueil</PrimaryButton.Text>
              </PrimaryButton>
              <SecondaryButton>
                <SecondaryButton.Icon>
                  <FontAwesome name="calendar-o" />
                </SecondaryButton.Icon>
                <SecondaryButton.Text>
                  Ajouter au calendrier
                </SecondaryButton.Text>
              </SecondaryButton>
            </YStack>
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
