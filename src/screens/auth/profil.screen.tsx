import { Page } from "@/ui/views";
import { UserInfoView } from "@/ui/views/user";
import React from "react";

export const ProfilScreen = React.memo(function(){
    return <Page>
        <UserInfoView />
    </Page>
})