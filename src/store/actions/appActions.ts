import {ToggleInitializingType} from "./actionsTypes";

export const toggleInitializingAC = (initializing: boolean): ToggleInitializingType => ({
    type: "INITIALIZING",
    payload: {initializing}
})
