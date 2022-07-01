import {AddTaskType, ChangeTaskStatusType, ChangeTaskTitleType, RemoveTaskType, SetTasksType} from "./actionsTypes";
import {TaskType} from "../../components/Todolists/types";

export const addTaskAC = (task: TaskType): AddTaskType => {
    return {
        type: "ADD_TASK",
        task
    }
};

export const removeTaskAC = (todoId: string, taskId: string): RemoveTaskType => {
    return {
        type: "REMOVE_TASK",
        todoId,
        taskId,
    }
};

export const changeTaskStatusAC = (todoId: string, taskId: string, status: number): ChangeTaskStatusType => {
    return {
        type: "CHANGE_TASK_STATUS",
        todoId,
        taskId,
        status,
    }
};

export const changeTaskTitleAC = (todoId: string, taskId: string, title: string): ChangeTaskTitleType => {
    return {
        type: "CHANGE_TASK_TITLE",
        todoId,
        taskId,
        title,
    }
};

export const setTasksAC = (todoId: string, tasks: any): SetTasksType => {
    return {
        type: "SET_TASKS",
        todoId,
        tasks
    }
};
