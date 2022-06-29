import axios from "axios";
import {ResponseType, ResponseDataType, CreateResponseType} from "./types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "api-key": "1690be4a-0b2f-42a4-9e71-302df103dbfe",
    }
})


export const todolistsApi = {
    getTodolists: () => {
        return instance.get<ResponseType>(`todo-lists`).then(res => res.data)
    },
    createTodolist: (title: string) => {
        return instance.post<ResponseDataType<CreateResponseType>>(`todo-lists`, {title}).then(res => res.data)
    },
    updateTodolist: (id: string, title: string) => {
        return instance.put<ResponseDataType>(`todo-lists/${id}`, {title}).then(res => res.data)
    },
    deleteTodolist: (id: string) => {
        return instance.delete<ResponseDataType>(`todo-lists/${id}`).then(res => res.data)
    },
}
