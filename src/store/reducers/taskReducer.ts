import {
    AddTaskType,
    AddTodolistType,
    ChangeTaskStatusType,
    ChangeTaskTitleType,
    RemoveTaskType,
    RemoveTodolistType
} from "../actions";
import {SetTasksType} from "../actions/actionsTypes";
import {TasksType} from "../../components/Todolists/types";


export type TaskActionsType = AddTodolistType
    | RemoveTodolistType
    | AddTaskType
    | RemoveTaskType
    | ChangeTaskStatusType
    | ChangeTaskTitleType
    | SetTasksType

export type TaskReducerType = (state: TasksType, action: TaskActionsType) => TasksType;

const initialState: TasksType = {}

export const taskReducer = (state: TasksType = initialState, action: TaskActionsType): TasksType => {
    switch (action.type) {
        case "SET_TASKS": {
            return {...state, [action.todoId]: action.tasks};
        }
        case "ADD_TODOLIST": {
            return {[action.newTodolist.id]: [], ...state};
        }
        case "ADD_TASK": {
            return {...state, [action.task.todoListId]: [{...action.task}, ...state[action.task.todoListId]]};
        }
        case "REMOVE_TASK": {
            return {...state, [action.todoId]: state[action.todoId].filter((task) => task.id !== action.taskId)};
        }
        case "CHANGE_TASK_STATUS": {
            return {...state,
                [action.todoId]: state[action.todoId].map((task) => task.id === action.taskId ? {
                    ...task,
                    status: action.status
                } : task)
            }
        }
        case "CHANGE_TASK_TITLE": {
            return {...state,
                [action.todoId]: state[action.todoId].map((task) => task.id === action.taskId ? {
                    ...task,
                    title: action.title
                } : task)
            }
        }
        case "REMOVE_TODOLIST": {
            let copyState = {...state};
            delete copyState[action.todoId];
            return copyState;
        }
        default:
            return state;
    }
}
