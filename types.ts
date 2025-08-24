import { ImageURISource } from "react-native";

export interface AIChatMessage {
    sender: 'user' | 'ai'
    body: string
    loading?: boolean
    createdAt?: string
}

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
    payAvailable?: boolean;
    cover?: ImageURISource;
    mentorGender: "women" | "men";
    price: number;
    about: string;
    objectives: string[];
    targetPeople: string;
    mentorName: string;
    mentorTitle: string;
    mentorBio: string;
    programName: string;
    programDescription: string;
    tag: string;
    variables?:{
        mentor_card_alt1?: boolean
    }
}

// States types
export interface SessionType {
    isAuthenticated: boolean;
}