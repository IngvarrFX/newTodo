import {combineReducers, createStore, Store} from "redux"
import {taskReducer, todolistReducer} from "./reducers";
import {TodolistActionsType} from "./reducers/todolistReducer";
import {TaskActionsType} from "./reducers/taskReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    todolists: todolistReducer,
});

//export const store = createStore(rootReducer);

export const store: Store<AppStateType, AppActionType> & {
    dispatch: DispatchType
} = createStore(rootReducer)


export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionType = TodolistActionsType | TaskActionsType
type DispatchType = (args: AppActionType) => AppActionType;
