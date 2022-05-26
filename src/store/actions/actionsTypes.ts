import {FilterType} from "../../App";

export type AddTodolistType = {
    type: "ADD_TODOLIST"
    todoId: string
    title: string
};

export type RemoveTodolistType = {
    type: "REMOVE_TODOLIST"
    todoId: string
};

export type ChangeTodolistFilterType = {
    type: "CHANGE_TODOLIST_FILTER"
    todoId: string
    filter: FilterType
};

export type ChangeTodolistTitleType = {
    type: "CHANGE_TODOLIST_TITLE"
    todoId: string
    title: string
};

export type RemoveTaskType = {
    type: "REMOVE_TASK"
    todoId: string
    taskId: string
};

export type AddTaskType = {
    type: "ADD_TASK"
    todoId: string
    title: string
};

export type ChangeTaskStatusType = {
    type: "CHANGE_TASK_STATUS"
    todoId: string
    taskId: string
    status: boolean
};

export type ChangeTaskTitleType = {
    type: "CHANGE_TASK_TITLE"
    todoId: string
    taskId: string
    title: string
};
