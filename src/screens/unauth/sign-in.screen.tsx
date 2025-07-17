import { FormInput, PrimaryInput } from "@/ui/inputs";
import { PageTitleText } from "@/ui/texts";
import { Page } from "@/ui/views";
import React from "react";

export const SignInScreen = React.memo(function () {
  return (
    <Page>
      <PageTitleText>Créez votre compte</PageTitleText>

      <FormInput
        title="Adresse email"
        error="dqwdq"
        inputProps={{
          placeholder: "ex: vous@email.com",
        }}
      />
      <FormInput
        title="Mot de passe"
        inputProps={{
          placeholder: "ex: vous@email.com",
        }}
      />
      <FormInput
        title="Confirmer le mot de passe"
        inputProps={{
          placeholder: "Retapez votre mot de passe sécurisé",
        }}
      />
    </Page>
  );
});
