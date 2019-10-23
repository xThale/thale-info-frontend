import {initNotificationState, NotificationState} from "./notification";
import {AuthState, initAuthState} from "./auth";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";

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

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;