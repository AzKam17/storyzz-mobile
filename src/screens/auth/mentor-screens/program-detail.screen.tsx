import { Page } from "@/ui/views";
import { StaticScreenProps } from "@react-navigation/native";
import React from "react";

type Props = StaticScreenProps<{
    programId: string;
}>

export const ProgramDetailScreen = React.memo(function (props: Props) {
  return <Page hasBottom={false}></Page>;
});
