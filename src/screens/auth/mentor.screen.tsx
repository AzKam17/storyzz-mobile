import { PillButtonList } from "@/ui/buttons";
import { SearchBarInput } from "@/ui/inputs";
import { PageTitleText } from "@/ui/texts";
import { Page } from "@/ui/views";
import { NoContentSearchView } from "@/ui/views/misc";
import { ProgramCardView } from "@/ui/views/programs";
import { programs } from "@/utils";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "tamagui";

export const MentorScreen = React.memo(function () {
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
    <Page hasBottom={true}>
      <PageTitleText>Programes</PageTitleText>
      <FlashList
        data={listValues}
        ListHeaderComponent={
          <YStack gap={5} paddingBottom={10}>
            <SearchBarInput value={searchValue} onChangeText={setSearchValue} />
            <PillButtonList values={tagList} setValuesList={setTagList} />
          </YStack>
        }
        renderItem={({ item, index }) => (
          <ProgramCardView id={index} {...item} />
        )}
        ListEmptyComponent={<NoContentSearchView onPress={clearSearch} />}
        estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
      />
    </Page>
  );
});
