import {AnyAction} from "redux"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "../store";
import {todolistsApi} from "../../api";
import {addTodolistAC, changeTodolistTitleAC, removeTodolistAC, setTodolistsAC} from "../actions/todoActions";
import {toggleInitializingAC} from "../actions/appActions";

export const getTodolistsTC = (): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    dispatch(toggleInitializingAC(true))
    todolistsApi.getTodolists().then((todolists) => {
        dispatch(setTodolistsAC(todolists))
        dispatch(toggleInitializingAC(false))
    }).catch((err) => {
        console.log(err)
    })
}

export const addTodolistTC = (title: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    todolistsApi.createTodolist(title).then((todolist) => {
        todolist.filter = "All"
        dispatch(addTodolistAC(todolist.id, todolist))
    }).catch((err) => {
        console.log(err)
    })
}

export const updateTodolistTC = (id: string, title: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    todolistsApi.updateTodolist(id, title).then((res) => {
        if (!res.resultCode) {
            dispatch(changeTodolistTitleAC(id, title))
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const removeTodolistTC = (id: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    todolistsApi.deleteTodolist(id).then((res) => {
        if (!res.resultCode) {
            dispatch(removeTodolistAC(id))
        }
    }).catch((err) => {
        console.log(err)
    })
}
