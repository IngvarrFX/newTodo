import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {appReducer, taskReducer, todolistReducer} from "./reducers";
import {TodolistActionsType} from "./reducers/todolistReducer";
import {TaskActionsType} from "./reducers/taskReducer";

const rootReducer = combineReducers({
    app: appReducer,
    tasks: taskReducer,
    todolists: todolistReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

/*export const store: Store<AppStateType, AppDispatch > = createStore(rootReducer, applyMiddleware(thunk))*/

//types
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
/*export type AppActionType = TodolistActionsType | TaskActionsType;*/

//@ts-ignore
window.state = store.getState;
