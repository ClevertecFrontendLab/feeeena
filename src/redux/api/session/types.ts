export type RequestLogin = {
    email: string;
    password: string;
    remember?: boolean;
};

export type RequestRegister = {
    email: string;
    password: string;
    remember?: boolean;
    passwordConfirm?: string;
};

export type RequestConfirmEmail = {
    email: string;
    code: string;
};

export type RequestChangePassword = {
    password: string;
    confirmPassword: string;
};

export type RequestCheckEmail = {
    email: string;
};

export type SessionLogin = {
    accessToken: string;
};

export type SessionRegister = {
    accessToken?: string;
};

export type SessionCheckEmai = {
    email: string;
    message: string;
};

export type SessionConfirmEmail = {
    email: string;
    message: string;
};

export type SessionChangePassword = {
    message: string;
};
