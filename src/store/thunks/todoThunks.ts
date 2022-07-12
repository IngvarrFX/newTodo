import {AppThunkType} from "../store";
import {todolistsApi} from "../../api";
import {addTodolistAC, changeTodolistTitleAC, removeTodolistAC, setTodolistsAC} from "../actions/todoActions";
import {toggleInitializingAC} from "../actions/appActions";

export const getTodolistsTC = (): AppThunkType => (dispatch) => {
    dispatch(toggleInitializingAC(true))
    todolistsApi.getTodolists().then((todolists) => {
        dispatch(setTodolistsAC(todolists))
        dispatch(toggleInitializingAC(false))
    }).catch((err) => {
        console.log(err)
    })
}

export const addTodolistTC = (title: string): AppThunkType => (dispatch) => {
    todolistsApi.createTodolist(title).then((todolist) => {
        todolist.filter = "All"
        dispatch(addTodolistAC(todolist.id, todolist))
    }).catch((err) => {
        console.log(err)
    })
}

export const updateTodolistTC = (id: string, title: string): AppThunkType => (dispatch) => {
    todolistsApi.updateTodolist(id, title).then((res) => {
        if (!res.resultCode) {
            dispatch(changeTodolistTitleAC(id, title))
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const removeTodolistTC = (id: string): AppThunkType => (dispatch) => {
    todolistsApi.deleteTodolist(id).then((res) => {
        if (!res.resultCode) {
            dispatch(removeTodolistAC(id))
        }
    }).catch((err) => {
        console.log(err)
    })
}
