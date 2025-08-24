import React from "react";
import { Avatar, Image, styled } from "tamagui";

const CImage = styled(Image, {
    height: 80, width: 80, borderRadius: 100,
})

export const Avatar1 = styled(CImage, {
    source: require("~/images/avatar1.png")
})

export const Avatar2 = styled(CImage, {
    source: require("~/images/avatar2.png")
})

export const Avatar3 = styled(CImage, {
    source: require("~/images/avatar3.png")
})

export const Avatar4 = styled(CImage, {
    source: require("~/images/avatar4.png")
})

export const Avatar5 = styled(CImage, {
    source: require("~/images/avatar5.png")
})

export const CAvatar = React.memo(function({avatar, height = 80, width = 80}:{avatar: string, height?: number, width?: number}){
    const props = {
        width,
        height
    }
   
    if(avatar === 'avatar1') {
        return <Avatar1 {...props} />
    } else if(avatar === 'avatar2') {
        return <Avatar2 {...props} />
    } else if(avatar === 'avatar3') {
        return <Avatar3 {...props} />
    } else if(avatar === 'avatar4') {
        return <Avatar4 {...props} />
    } else if(avatar === 'avatar5') {
        return <Avatar5 {...props} />
    }
    return <></>
})