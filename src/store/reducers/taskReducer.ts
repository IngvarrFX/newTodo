import {TasksType} from "../../App";
import {v1} from "uuid";
import {
    AddTaskType,
    AddTodolistType,
    ChangeTaskStatusType,
    ChangeTaskTitleType,
    RemoveTaskType, RemoveTodolistType
} from "../actions";


export type TaskActionsType = AddTodolistType
    | RemoveTodolistType
    | AddTaskType
    | RemoveTaskType
    | ChangeTaskStatusType
    | ChangeTaskTitleType

export type TaskReducerType = (state: TasksType, action: TaskActionsType) => TasksType;

const initialState: TasksType = {
    "todolistID1": [
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "Redux", isDone: true},
        {id: v1(), title: "NextJS", isDone: false},
    ],
    "todolistID2": [
        {id: v1(), title: "Bread", isDone: true},
        {id: v1(), title: "Cola", isDone: true},
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "Chocolate", isDone: true},
        {id: v1(), title: "Fish", isDone: false},
    ]
}

export const taskReducer = (state: TasksType = initialState, action: TaskActionsType): TasksType => {
    switch (action.type) {
        case "ADD_TODOLIST": {
            return {[action.todoId]: [], ...state};
        }
        case "ADD_TASK": {
            return {
                ...state, [action.todoId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todoId]]
            }
        }
        case "REMOVE_TASK": {
            return {...state, [action.todoId]: state[action.todoId].filter((task) => task.id !== action.taskId)};
        }
        case "CHANGE_TASK_STATUS": {
            return {...state,
                [action.todoId]: state[action.todoId].map((task) => task.id === action.taskId ? {
                    ...task,
                    isDone: action.status
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
