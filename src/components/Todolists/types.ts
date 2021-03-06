import {TaskPriorities} from "../../api/types";
import {StatusType} from "../../store/reducers/types";

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type TasksType = {
    [key: string]: Array<TaskType>
}

export type TodoType = {
    id: string
    title: string
    filter: FilterType
    addedDate: string
    order: number
    entityStatus: StatusType
}


export type FilterType = "All" | "Completed" | "Active";
