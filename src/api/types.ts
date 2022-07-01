export type ResponseType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type ResponseDataType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}

export type CreateResponseType = {
    item: ResponseType
}

export interface ITaskType {
    addedDate: string,
    deadline: string,
    description: null,
    id: string,
    order: number,
    priority: TaskPriorities,
    startDate: null,
    status: number,
    title: string,
    todoListId: string,
    completed: boolean,
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3,
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    High = 2,
    Urgently = 3,
    Later = 4,
}
