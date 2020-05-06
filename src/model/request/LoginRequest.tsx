
export enum LoginMethod {
    GOOGLE= "google"
}

export interface LoginRequest {
    token: string
    loginMethod: LoginMethod
}