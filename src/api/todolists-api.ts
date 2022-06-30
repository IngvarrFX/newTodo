import axios from "axios";
import {ResponseDataType} from "./types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "api-key": "1690be4a-0b2f-42a4-9e71-302df103dbfe",
    }
})


export const todolistsApi = {
    getTodolists: () => {
        return instance.get(`todo-lists`).then(res => res.data.map((todo: any) => ({...todo, filter: "All"})))
    },
    createTodolist: (title: string) => {
        return instance.post(`todo-lists`, {title}).then(res => res.data.data.item)
    },
    updateTodolist: (id: string, title: string) => {
        return instance.put(`todo-lists/${id}`, {title}).then(res => res.data)
    },
    deleteTodolist: (id: string) => {
        return instance.delete<ResponseDataType>(`todo-lists/${id}`).then(res => res.data)
    },

}

export const tasksApi = {
    getTasks: (todoId: string) => {
        return instance.get(`todo-lists/${todoId}/tasks`).then(res => res.data.items)
    },
    createTask: (todoId: string, title: string) => {
        return instance.post(`todo-lists/${todoId}/tasks`, {title}).then(res => res.data.items)
    },
    updateTask: (todoId: string, taskId: string, title: string, status: number) => {
        const data = {
            title,
            completed: false,
            description: "",
            status,
            priority: 0,
            startDate: "",
            deadline: "",
        }
        return instance.put(`todo-lists/${todoId}/tasks/${taskId}`, data).then(res => res.data.items)
    },
    deleteTask: (todoId: string, taskId: string) => {
        return instance.delete(`todo-lists/${todoId}/tasks/${taskId}`).then(res => res.data.items)
    },
}
