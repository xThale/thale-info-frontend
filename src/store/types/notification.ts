import ErrorNotification from "../../model/ErrorNotification";


export interface NotificationState {
    currentError: ErrorNotification | null
}

export function initNotificationState(): NotificationState {
    return {
        currentError: null
    }
}