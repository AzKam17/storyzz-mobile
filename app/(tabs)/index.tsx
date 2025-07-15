import { StyleSheet } from "react-native";

import { PillButtonList } from "@/components/buttons";
import { SearchBarInput } from "@/components/inputs";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/texts/PageTitle";
import { NoContentSearchMisc } from "@/components/views/misc";
import { ProgramCard } from "@/components/views/programs";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const programs = [
  {
    mentorGender: "women",
    mentorName: "Edith Brou-Bleu",
    programName: "Maîtriser sa Productivité Personnelle",
    programDescription:
      "Organisez votre travail et gérez vos priorités pour atteindre vos objectifs sans vous épuiser",
    tag: "Productivité",
  },
  {
    mentorGender: "men",
    mentorName: "Didier Drogba",
    programName: "Leadership : Incarner le Changement",
    programDescription:
      "Apprenez à mobiliser et à inspirer vos équipes pour naviguer avec succès.",
    tag: "Leadership",
  },
  {
    mentorGender: "women",
    mentorName: "Janine Kacou Diagou",
    programName: "La Boîte à Outils du Manager Efficace",
    programDescription:
      "Maîtrisez les techniques essentielles pour déléguer, motiver et donner du feedback.",
    tag: "Management",
  },
  {
    mentorGender: "men",
    mentorName: "Tidjane Thiam",
    programName: "Finance pour Dirigeants et Managers",
    programDescription:
      "Prenez des décisions éclairées en maîtrisant les indicateurs financiers clés.",
    tag: "Finance",
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [tagList, setTagList] = React.useState<string[]>([]);



  const listValues = React.useMemo(
    function () {
      const e = searchValue.toLowerCase();
      let filteredPrograms = programs;

      // Apply search filter
      if (e) {
        filteredPrograms = filteredPrograms.filter(
          (program) =>
            program.mentorName.toLowerCase().includes(e) ||
            program.programName.toLowerCase().includes(e) ||
            program.programDescription.toLowerCase().includes(e) ||
            program.tag.toLowerCase().includes(e)
        );
      }

      // Apply tag filter
      if (tagList.length > 0) {
        filteredPrograms = filteredPrograms.filter((program) =>
          tagList.includes(program.tag)
        );
      }

      console.log(filteredPrograms)
      return filteredPrograms;
    },
    [searchValue, tagList]
  );

  const clearSearch = React.useCallback(function () {
    setSearchValue("");
    setTagList([]);
  }, []);

  return (
    <Page hasBottom={true}>
      <PageTitle>Programes</PageTitle>
      <SearchBarInput value={searchValue} onChangeText={setSearchValue} />
      <PillButtonList values={tagList} setValuesList={setTagList} />
      <FlashList
        data={listValues}
        renderItem={({ item }) => <ProgramCard {...item} />}
        ListEmptyComponent={<NoContentSearchMisc onPress={clearSearch} />}
        estimatedItemSize={300}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
