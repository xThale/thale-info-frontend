import * as constants from '../constants/notification';
import ErrorNotification from "../../model/state/ErrorNotification";
import {Action} from "redux";

export interface PublishErrorNotificationAction extends Action {
    type: constants.NOTIFICATION_ERROR_PUBLISHED
    error: ErrorNotification
}

export type NotificationAction = PublishErrorNotificationAction

export function publishErrorNotification(error: ErrorNotification): NotificationAction {
    return {
        type: constants.NOTIFICATION_ERROR_PUBLISHED,
        error: error
    }
}