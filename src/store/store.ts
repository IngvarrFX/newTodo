import {combineReducers, createStore, Store, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {taskReducer, todolistReducer} from "./reducers";
import {TodolistActionsType} from "./reducers/todolistReducer";
import {TaskActionsType} from "./reducers/taskReducer";
import {appReducer} from "./reducers/appReducer";

const rootReducer = combineReducers({
    app: appReducer,
    tasks: taskReducer,
    todolists: todolistReducer,
});

export const store = createStore(rootReducer,  applyMiddleware(thunk));

/*
export const store: Store<AppStateType, AppActionType> & {
    dispatch: DispatchType
} = createStore(rootReducer, applyMiddleware(thunk))
*/


export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionType = TodolistActionsType | TaskActionsType
type DispatchType = (args: AppActionType) => AppActionType;
