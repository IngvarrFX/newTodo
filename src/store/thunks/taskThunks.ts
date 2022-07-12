import {AppThunkType} from "../store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, setTasksAC} from "../actions/tasksActions";
import {tasksApi} from "../../api/todolists-api";
import {TaskType} from "../../components/Todolists/types";

export const getTasksTC = (todoId: string): AppThunkType =>
    (dispatch) => {
        tasksApi.getTasks(todoId).then((tasks) => {
            dispatch(setTasksAC(todoId, tasks))
        }).catch((err) => {
            console.log(err)
        })
    }

export const createTaskTC = (todoId: string, title: string): AppThunkType =>
    (dispatch) => {
        tasksApi.createTask(todoId, title).then((task: TaskType) => {
            dispatch(addTaskAC(task))
        }).catch((err) => {
            console.log(err)
        })
    }

export const updateTaskTC = (todoId: string, taskId: string, title: string, status: number): AppThunkType => (dispatch) => {
    tasksApi.updateTask(todoId, taskId, title, status).then(() => {
        dispatch(changeTaskTitleAC(todoId, taskId, title))
        dispatch(changeTaskStatusAC(todoId, taskId, status))
    }).catch((err) => {
        console.log(err)
    })
}

export const removeTaskTC = (todoId: string, taskId: string): AppThunkType =>
    (dispatch) => {
        tasksApi.deleteTask(todoId, taskId).then(() => {
            dispatch(removeTaskAC(todoId, taskId))
        }).catch((err) => {
            console.log(err)
        })
    }
