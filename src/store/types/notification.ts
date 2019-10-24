import ErrorNotification from "../../model/state/ErrorNotification";


export interface NotificationState {
    currentError?: ErrorNotification
}

export function initNotificationState(): NotificationState {
    return {
        currentError: undefined
    }
}