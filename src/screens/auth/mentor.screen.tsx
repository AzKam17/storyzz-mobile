import { PillButtonList } from "@/ui/buttons";
import { SearchBarInput } from "@/ui/inputs";
import { PageTitleText } from "@/ui/texts";
import { Page } from "@/ui/views";
import { NoContentSearchView } from "@/ui/views/misc";
import { ProgramCardView } from "@/ui/views/programs";
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

export const MentorScreen = React.memo(function(){
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

      return filteredPrograms;
    },
    [searchValue, tagList]
  );

  const clearSearch = React.useCallback(function () {
    setSearchValue("");
    setTagList([]);
  }, []);

  return (
    <Page hasBottom={false}>
      <PageTitleText>Programes</PageTitleText>
      <SearchBarInput value={searchValue} onChangeText={setSearchValue} />
      <PillButtonList values={tagList} setValuesList={setTagList} />
      <FlashList
        data={listValues}
        renderItem={({ item }) => <ProgramCardView {...item} />}
        ListEmptyComponent={<NoContentSearchView onPress={clearSearch} />}
        estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
      />
    </Page>
  );
})