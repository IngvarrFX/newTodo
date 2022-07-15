//types
import {ToggleInitializingType} from "../actions";
import {ChangeAppStatusType, SetErrorType} from "../actions/actionsTypes";

export type InitialStateType = {
    initializing: boolean
    isLogin: boolean
    statusApp: StatusType
    error: null | string,
}

export type AppActionsType = ToggleInitializingType | ChangeAppStatusType | SetErrorType
export type StatusType = "idle" | "loading" | "succeeded" | "failed";
