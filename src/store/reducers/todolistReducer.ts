import {AddTodolistType, ChangeTodolistFilterType, ChangeTodolistTitleType, RemoveTodolistType} from "../actions";
import {ChangeTodolistStatusType, SetTodolistsType} from "../actions/actionsTypes";
import {TodoType} from "../../components/Todolists/types";

export type TodolistActionsType = AddTodolistType
    | RemoveTodolistType
    | ChangeTodolistFilterType
    | ChangeTodolistTitleType
    | SetTodolistsType
    | ChangeTodolistStatusType

export type TodolistReducerType = (state: TodoType[], action: TodolistActionsType) => TodoType[];

const initialState: TodoType[] = [];

export const todolistReducer = (state: TodoType[] = initialState, action: TodolistActionsType): TodoType[] => {
    switch (action.type) {
        case "SET_TODOLISTS" : {
            return [...action.todolists];
        }
        case "ADD_TODOLIST": {
            return [{...action.newTodolist}, ...state];
        }
        case "REMOVE_TODOLIST": {
            return state.filter((todo) => todo.id !== action.todoId);
        }
        case "CHANGE_TODOLIST_FILTER": {
            return state.map((todo) => todo.id === action.todoId ? {...todo, filter: action.filter} : todo);
        }
        case "CHANGE_TODOLIST_TITLE": {
            return state.map((todo) => todo.id === action.todoId ? {...todo, title: action.title} : todo);
        }
        case "CHANGE_TODOLIST_STATUS": {
            return state.map((todo) => todo.id === action.todoId ? {...todo, entityStatus: action.status} : todo);
        }
        default:
            return state;
    }
}
