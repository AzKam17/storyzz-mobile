import { ImageURISource } from "react-native";

// Forms
export interface SignInForm {
    email: string;
    password: string;
    repeat_password: string;
}

export interface LoginForm {
    email: string;
    password: string;
}

// types
export interface Program {
    cover?: ImageURISource;
    mentorGender: "women" | "men";
    mentorName: string;
    programName: string;
    programDescription: string;
    tag: string;
}

// States types
export interface SessionType {
    isAuthenticated: boolean;
}