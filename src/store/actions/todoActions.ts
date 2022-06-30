import {
    AddTodolistType,
    ChangeTodolistFilterType,
    ChangeTodolistTitleType,
    RemoveTodolistType,
    SetTodolistsType
} from "./actionsTypes";
import {FilterType, TodoType} from "../../components/Todolists/types";

export const setTodolistsAC = (todolists: any): SetTodolistsType => {
    return {type: "SET_TODOLISTS", todolists}
};

export const addTodolistAC = (todoId: string, newTodolist: TodoType): AddTodolistType => {
    return {type: "ADD_TODOLIST", todoId, newTodolist}
};

export const removeTodolistAC = (todoId: string): RemoveTodolistType => {
    return {type: "REMOVE_TODOLIST", todoId}
};

export const changeTodolistFilterAC = (todoId: string, filter: FilterType): ChangeTodolistFilterType => {
    return {type: "CHANGE_TODOLIST_FILTER", todoId, filter}
};

export const changeTodolistTitleAC = (todoId: string, title: string): ChangeTodolistTitleType => {
    return {type: "CHANGE_TODOLIST_TITLE", todoId, title}
};

