import { PageTitleText } from "@/ui/texts";
import { Page } from "@/ui/views";
import React from "react";
import { LoginForm } from "../../../types";
import { Controller, useForm } from "react-hook-form";
import { PrimaryButton } from "@/ui/buttons";
import { FormInput } from "@/ui/inputs";
import { styled, YStack, Text } from "tamagui";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const SigninMessage = styled(Text, {
  textAlign: "center",
  fontFamily: "RedHatText_400Regular",
  fontSize: 16,
  color: "rgba(74, 74, 74, 1)",
});

const SigninMessageBolg = styled(SigninMessage, {
  fontWeight: "bold",
  fontFamily: "RedHatText_500Medium",
  color: "rgba(74, 74, 74, 1)",
});

export const LoginScreen = React.memo(function () {
  const navigation = useNavigation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({ mode: "onChange" });

  const submit = (value: LoginForm) => {
    const { email, password } = value;

    if (email === "ludovic@refletconsulting.com") {
      Toast.show({
        type: "error",
        text1: "Email ou mot de passe incorrect",
        text1Style: {
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "RedHatText_500Medium",
        },
      });
      return;
    }

    navigation.navigate("bottom_navigator");
  };

  return (
    <Page>
      <PageTitleText>Connectez-vous</PageTitleText>
      <YStack flex={1} justifyContent="center" gap={20}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "L'adresse email est requise.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Veuillez entrer une adresse email valide.",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              title="Adresse email"
              error={errors.email?.message}
              inputProps={{
                value: value,
                onBlur: onBlur,
                onChangeText: onChange,
                placeholder: "ex: vous@email.com",
              }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Le mot de passe est requis.",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              title="Mot de passe"
              error={errors.password?.message}
              inputProps={{
                value: value,
                onBlur: onBlur,
                onChangeText: onChange,
                placeholder: "Entrez votre mot de passe",
                secureTextEntry: true,
              }}
            />
          )}
        />
      </YStack>
      <YStack gap={10}>
        <SigninMessage onPress={() => navigation.navigate("sign_in")}>
          Nouveau sur Storyzz ?{" "}
          <SigninMessageBolg>Créer un compte</SigninMessageBolg>
        </SigninMessage>
        <PrimaryButton disabled={!isValid} onPress={handleSubmit(submit)}>
          Se connecter
        </PrimaryButton>
      </YStack>
    </Page>
  );
});
