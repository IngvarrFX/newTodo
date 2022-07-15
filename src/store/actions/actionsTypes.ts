import {FilterType, TaskType, TodoType} from "../../components/Todolists/types";
import {StatusType} from "../reducers/types";

export type ToggleInitializingType = {
    type: "INITIALIZING"
    payload: {
        initializing: boolean
    }
};

export type ChangeAppStatusType = {
    type: "CHANGE_APP_STATUS"
    payload: {
        status: StatusType
    }
};

export type SetErrorType = {
    type: "SET_ERROR"
    payload: {
        error: string | null
    }
};

export type SetTodolistsType = {
    type: "SET_TODOLISTS"
    todolists: any
};

export type AddTodolistType = {
    type: "ADD_TODOLIST"
    todoId: string
    newTodolist: TodoType
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

export type ChangeTodolistStatusType = {
    type: "CHANGE_TODOLIST_STATUS"
    todoId: string
    status: StatusType
};

export type SetTasksType = {
    type: "SET_TASKS"
    todoId: string
    tasks: any
};

export type RemoveTaskType = {
    type: "REMOVE_TASK"
    todoId: string
    taskId: string
};

export type AddTaskType = {
    type: "ADD_TASK"
    task: TaskType
};

export type ChangeTaskStatusType = {
    type: "CHANGE_TASK_STATUS"
    todoId: string
    taskId: string
    status: number
};

export type ChangeTaskTitleType = {
    type: "CHANGE_TASK_TITLE"
    todoId: string
    taskId: string
    title: string
};
