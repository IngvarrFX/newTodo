import {ChangeAppStatusType, SetErrorType, ToggleInitializingType} from "./actionsTypes";
import {StatusType} from "../reducers/types";

export const toggleInitializingAC = (initializing: boolean): ToggleInitializingType => ({
    type: "INITIALIZING",
    payload: {initializing}
})

export const changeAppStatus = (status: StatusType): ChangeAppStatusType => ({
    type: "CHANGE_APP_STATUS",
    payload: {status}
})

export const setError = (error: string | null): SetErrorType => ({
    type: "SET_ERROR",
    payload: {error}
})
