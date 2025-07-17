import { FormInput, PrimaryInput } from "@/ui/inputs";
import { PageTitleText } from "@/ui/texts";
import { Page } from "@/ui/views";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SignInForm } from "../../../types";
import { YStack } from "tamagui";

export const SignInScreen = React.memo(function () {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<SignInForm>({ mode: "onChange" });

  return (
    <Page>
      <PageTitleText>Créez votre compte</PageTitleText>

      <YStack>
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
            minLength: {
              value: 6,
              message: "Le mot de passe doit contenir au moins 6 caractères.",
            },
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

        <Controller
          name="repeat_password"
          control={control}
          rules={{
            required: "Veuillez confirmer votre mot de passe.",
            validate: (value, formValues) => {
              return (
                value === formValues.password ||
                "Les mots de passe ne correspondent pas."
              );
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormInput
              title="Confirmer le mot de passe"
              error={errors.repeat_password?.message}
              inputProps={{
                value: value,
                onBlur: onBlur,
                onChangeText: onChange,
                placeholder: "Retapez votre mot de passe sécurisé",
                secureTextEntry: true,
              }}
            />
          )}
        />
      </YStack>
      
    </Page>
  );
});
