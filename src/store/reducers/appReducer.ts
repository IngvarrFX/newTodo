import {ToggleInitializingType} from "../actions";

const initialState = {
    initializing: false
}

export type AppActionsType = ToggleInitializingType

type InitialStateType = {
    initializing: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZING": {
            return {...state, initializing: action.payload.initializing}
        }
        default: {
            return state;
        }
    }
}
