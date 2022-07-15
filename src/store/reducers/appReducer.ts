import {AppActionsType, InitialStateType} from "./types";

const initialState: InitialStateType = {
    initializing: false,
    isLogin: false,
    statusApp: "idle",
    error: null,
}

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZING": {
            return {...state, initializing: action.payload.initializing}
        }
        case "CHANGE_APP_STATUS": {
            return {...state, statusApp: action.payload.status}
        }
        case "SET_ERROR": {
            return {...state, error: action.payload.error}
        }
        default: {
            return state;
        }
    }
}
