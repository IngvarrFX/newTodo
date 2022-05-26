import {AddTodolistType, ChangeTodolistFilterType, ChangeTodolistTitleType, RemoveTodolistType} from "./actionsTypes";
import {FilterType} from "../../App";


export const addTodolistAC = (todoId: string, title: string): AddTodolistType => {
    return {type: "ADD_TODOLIST", todoId, title}
};

export const removeTodolistAC = (todoId: string): RemoveTodolistType => {
    return {type: "REMOVE_TODOLIST", todoId}
};

export const changeTodolistFilterAC = (todoId: string, filter:FilterType): ChangeTodolistFilterType => {
    return {type: "CHANGE_TODOLIST_FILTER", todoId, filter}
};

export const changeTodolistTitleAC = (todoId: string, title:string): ChangeTodolistTitleType => {
    return {type: "CHANGE_TODOLIST_TITLE", todoId, title}
};

