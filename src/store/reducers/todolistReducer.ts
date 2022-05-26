import {TodoType} from "../../App";
import {
    AddTodolistType,
    ChangeTodolistFilterType,
    ChangeTodolistTitleType,
    RemoveTodolistType
} from "../actions";

export type TodolistActionsType = AddTodolistType
    | RemoveTodolistType
    | ChangeTodolistFilterType
    | ChangeTodolistTitleType

export type TodolistReducerType = (state:TodoType[], action:TodolistActionsType)=> TodoType[];

const initialState:TodoType[] = [
    {id: "todolistID1", title: "What to learn", filter: "All"},
    {id: "todolistID2", title: "What to need", filter: "All"},
]

export const todolistReducer = (state: TodoType[] = initialState, action: TodolistActionsType): TodoType[] => {
    switch (action.type) {
        case "ADD_TODOLIST": {
            return [{id: action.todoId, title: action.title, filter: "All"}, ...state];
        }
        case "REMOVE_TODOLIST":{
            return state.filter((todo)=> todo.id !== action.todoId);
        }
        case "CHANGE_TODOLIST_FILTER":{
            return state.map((todo)=> todo.id === action.todoId ? {...todo, filter: action.filter} : todo);
        }
        case "CHANGE_TODOLIST_TITLE": {
            return state.map((todo)=> todo.id === action.todoId ? {...todo, title: action.title} : todo);
        }
        default:
            return state;
    }
}






