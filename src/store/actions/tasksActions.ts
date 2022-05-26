import {AddTaskType, ChangeTaskStatusType, ChangeTaskTitleType, RemoveTaskType} from "./actionsTypes";

export const addTaskAC = (todoId: string, title: string): AddTaskType => {
    return {
        type: "ADD_TASK",
        todoId,
        title,
    }
};

export const removeTaskAC = (todoId: string, taskId: string): RemoveTaskType => {
    return {
        type: "REMOVE_TASK",
        todoId,
        taskId,
    }
};

export const changeTaskStatusAC = (todoId: string, taskId: string, status: boolean): ChangeTaskStatusType => {
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
