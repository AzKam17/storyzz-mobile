import { PillButtonList } from "@/components/buttons";
import { SearchBarInput } from "@/components/inputs";
import { Page } from "@/components/Page";
import { NoContentSearchMisc } from "@/components/views/misc";
import { StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <Page>
      <SearchBarInput />
      <PillButtonList />
      <NoContentSearchMisc />
    </Page>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
