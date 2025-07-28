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

// States types
export interface SessionType {
    isAuthenticated: boolean;
}