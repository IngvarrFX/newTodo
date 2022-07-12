import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer, taskReducer, todolistReducer} from "./reducers";
import {TodolistActionsType} from "./reducers/todolistReducer";
import {TaskActionsType} from "./reducers/taskReducer";
import {AppActionsType} from "./reducers/appReducer";

const rootReducer = combineReducers({
    app: appReducer,
    tasks: taskReducer,
    todolists: todolistReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

/*export const store: Store<AppStateType, AppDispatch > = createStore(rootReducer, applyMiddleware(thunk))*/

//types
export type AppStateType = ReturnType<typeof rootReducer>;
//appState type
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionType>;
//actions type
export type AppActionType = AppActionsType | TodolistActionsType | TaskActionsType;
//thunks type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

//@ts-ignore
window.state = store.getState;
