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
    item:   ResponseType
}
