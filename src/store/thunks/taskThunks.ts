import {AnyAction} from "redux"
import {ThunkAction} from "redux-thunk"
import {AppStateType} from "../store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, setTasksAC} from "../actions/tasksActions";
import {tasksApi} from "../../api/todolists-api";
import {TaskType} from "../../components/Todolists/types";

export const getTasksTC = (todoId: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    tasksApi.getTasks(todoId).then((tasks) => {
        dispatch(setTasksAC(todoId, tasks))
    }).catch((err) => {
        console.log(err)
    })
}

export const createTaskTC = (todoId: string, title: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    tasksApi.createTask(todoId, title).then((task:TaskType) => {
        dispatch(addTaskAC(task))
    }).catch((err) => {
        console.log(err)
    })
}

export const updateTaskTC = (todoId: string, taskId: string, title: string, status: number): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    tasksApi.updateTask(todoId, taskId, title, status).then((tasks) => {
        dispatch(changeTaskTitleAC(todoId, taskId, title))
        dispatch(changeTaskStatusAC(todoId, taskId, status))
    }).catch((err) => {
        console.log(err)
    })
}

export const removeTaskTC = (todoId: string, taskId: string): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    tasksApi.deleteTask(todoId, taskId).then((tasks) => {
        dispatch(removeTaskAC(todoId, taskId))
    }).catch((err) => {
        console.log(err)
    })
}
