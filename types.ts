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

export interface Testimonial {
    avatar: string;
    learnerName: string;
    learnerTitle: string;
    text: string;
}
export interface Program {
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
    avatar: string;
    testimonials: Testimonial[];
    payAvailable?: boolean;
    variables?: Record<string, boolean>;
}

// States types
export interface SessionType {
    isAuthenticated: boolean;
}