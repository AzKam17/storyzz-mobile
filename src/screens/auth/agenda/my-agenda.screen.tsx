import { Page } from "@/ui/views";
import React from "react";
import moment from 'moment'
import { CalendarDisplayView } from "@/ui/views/misc";

export const MyAgendaScreen = React.memo(function(){
    return <Page style={{paddingTop: 10}}>
        <CalendarDisplayView />
    </Page>
})