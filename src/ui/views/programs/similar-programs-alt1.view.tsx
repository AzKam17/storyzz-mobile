import React from "react";
import { Program } from "../../../../types";
import { Text, Image, ScrollView, YStack, styled } from "tamagui";
import { programs } from "@/utils";

const TagText = styled(Text, {
    color: "white",
    backgroundColor: "rgb(163, 184, 153)",
    fontFamily: "RedHatDisplay_500Medium",
    fontSize: 12,
    padding: 10,
    paddingVertical: 2,
    borderRadius: 5,
    alignSelf: "flex-start",
})

const TitleText = styled(Text, {
    color: "rgb(26, 26, 26)",
    fontSize: 14,
    fontFamily: "RedHatDisplay_500Medium",
})

const AuthorText = styled(Text, {
    fontFamily: "RedHatDisplay_400Regular",
    color: "rgb(74, 74, 74)",
    fontSize: 12,
})

export const SimilarProgramsAlt1Item = React.memo(function({cover, tag, mentorName, programName}: Program){
    return <YStack borderRadius={20} width={220}>
        {cover && <Image source={cover} style={{height: 150, width: 220, borderTopLeftRadius: 10, borderTopRightRadius: 10}} />}
        <YStack gap={5} backgroundColor={"white"} padding={10} borderBottomRightRadius={10} borderBottomLeftRadius={10}>
            <TagText>{tag}</TagText>
            <TitleText>{programName}</TitleText>
            <AuthorText>Par {mentorName}</AuthorText>
        </YStack>
    </YStack>
})

export const SimilarProgramsAlt1 = React.memo(function(){
    return <ScrollView horizontal={true} contentContainerStyle={{gap: 10}}>
        {
            programs.map((program, idx) => (
                <SimilarProgramsAlt1Item key={idx} {...program} />
            ))
        }
    </ScrollView>
})