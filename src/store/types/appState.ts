import {initNotificationState, NotificationState} from "./notification";
import {AuthState, initAuthState} from "./auth";

export interface AppState {
    notification: NotificationState
    auth: AuthState
}

export function initState(): AppState {
    return {
        notification: initNotificationState(),
        auth: initAuthState()
    }
}