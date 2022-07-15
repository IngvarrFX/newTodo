import {InitialStateType} from "../types";
import {appReducer} from "../appReducer";
import {changeAppStatus, toggleInitializingAC} from "../../actions/appActions";

let initialState: InitialStateType;

beforeEach(() => {
    initialState = {
        initializing: false,
        isLogin: false,
        statusApp: "idle",
        error: null,
    }
})

test("should be initialized", () => {
    const isInitializeState = appReducer(initialState, toggleInitializingAC(true));

    expect(isInitializeState.initializing).toBe(true);
})

test("should be status changed", () => {
    const isInitializeState = appReducer(initialState, changeAppStatus("loading"));

    expect(isInitializeState.statusApp).toBe("loading");
})
