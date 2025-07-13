import { Pill } from "@/components/buttons/Pill.Button";
import React from "react";
import { ScrollView, XStack } from "tamagui";

export const PillButtonList = React.memo(function(){
    return <ScrollView>
        <XStack gap={10}>
            <Pill label="Leadership" />
            <Pill label="Communication" />
            <Pill label="Marketing" />
            <Pill label="Management" />
        </XStack>
    </ScrollView>
})