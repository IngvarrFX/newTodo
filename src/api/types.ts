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
    deadline: null,
    description: null,
    id: string,
    order: number,
    priority: number,
    startDate: null,
    status: number,
    title: string,
    todoListId: string,
    completed: boolean,
}

export enum TaskStatus {
    isDone = 2,
    notIsDone = 0,
}
