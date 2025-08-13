import { Page } from "@/ui/views";
import React from "react";
import moment, { Moment } from "moment";
import { CalendarDisplayView } from "@/ui/views/misc";
import { Text, View, YStack } from "tamagui";

export const MyAgendaScreen = React.memo(function () {
  const [selectedDate, setSelectedDate] = React.useState<Moment>(moment());

  const handleDateChange = (date: Moment) => {
    setSelectedDate(date);
  };

  return (
    <Page style={{ paddingTop: 10 }}>
      <CalendarDisplayView onChange={handleDateChange} />
      <YStack padding={16}>
        <Text fontSize={18} fontFamily="RedHatDisplay_700Bold">
          Session de {selectedDate.format("MMMM")}
        </Text>
        <View marginVertical={30}>
          <Text color={'rgb(107, 114, 128)'} textAlign="center" fontFamily={"RedHatDisplay_500Medium"}>
            Aucune session prévue ce mois-ci.
          </Text>
        </View>
      </YStack>
    </Page>
  );
});
