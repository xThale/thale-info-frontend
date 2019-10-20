
export enum LoginMethod {
    GOOGLE= "GOOGLE"
}

export interface LoginRequest {
    token: string
    loginMethod: LoginMethod
}