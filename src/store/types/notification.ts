import ErrorNotification from "../../model/state/ErrorNotification";


export interface NotificationState {
    currentError: ErrorNotification | null
}

export function initNotificationState(): NotificationState {
    return {
        currentError: null
    }
}