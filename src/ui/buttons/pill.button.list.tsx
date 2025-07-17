import { Pill } from "@/ui/buttons/pill.button";
import React from "react";
import { ScrollView, View, XStack } from "tamagui";

type Props = {
  values?: string[]
  setValuesList: (values: string[]) => void
}

export const PillButtonList = React.memo(function (props: Props) {
  const [values, setValues] = React.useState<string[]>(props.values || []);

  React.useEffect(() => {
    if (props.values !== undefined) {
      setValues(props.values);
    }
  }, [props.values]);

  const onPress = React.useCallback(function(value: string){
      setValues((prev) => {
        if (prev.includes(value)) {
          return prev.filter((v) => v !== value);
        }
        return [...prev, value];
      });
  }, []);

  const isActive = React.useCallback(function(value: string){
    return values.includes(value)
  }, [values])

  React.useEffect(() => props.setValuesList(values), [values])

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <XStack gap={10}>
          <Pill label="Leadership" onPress={onPress} isActive={isActive} />
          <Pill label="Communication" onPress={onPress} isActive={isActive} />
          <Pill label="Marketing" onPress={onPress} isActive={isActive} />
          <Pill label="Management" onPress={onPress} isActive={isActive} />
        </XStack>
      </ScrollView>
    </View>
  );
});