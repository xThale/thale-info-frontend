import {initNotificationState, NotificationState} from "../types/notification";
import * as constants from '../constants/notification';
import {PublishErrorNotificationAction} from "../actions/notification";


export function notificationReducer(
    state: NotificationState = initNotificationState(),
    action: PublishErrorNotificationAction
): NotificationState {
    switch (action.type) {
        case constants.NOTIFICATION_ERROR_PUBLISHED:
            return {...state, currentError: action.error}
    }
    return state
}