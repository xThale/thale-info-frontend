import {notificationReducer} from "./notification";
import { combineReducers } from "redux"
import {authReducer} from "./auth";


export const rootReducer = combineReducers({
    notification: notificationReducer,
    auth: authReducer
})