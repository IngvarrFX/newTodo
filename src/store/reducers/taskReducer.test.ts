import {v1} from "uuid";
import {taskReducer} from "./taskReducer";
import {
    addTaskAC,
    addTodolistAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    removeTodolistAC
} from "../actions";
import {TasksType, TodoType} from "../../components/Todolists/types";
import {TaskPriorities, TaskStatuses} from "../../api/types";

let tasks: TasksType;

beforeEach(() => {
    tasks = {
        "todolistID1": [
            {
                id: v1(),
                title: "JS",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Later,
                status: 0,
                todoListId: "todolistID1"
            },
            {
                id: v1(),
                title: "React",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 2,
                todoListId: "todolistID1"
            },
            {
                id: v1(),
                title: "CSS",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 2,
                todoListId: "todolistID1"
            },
            {
                id: v1(),
                title: "Redux",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 2,
                todoListId: "todolistID1"
            },
            {
                id: v1(),
                title: "NextJS",
                completed: false,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 0,
                todoListId: "todolistID1"
            },
        ],
        "todolistID2": [
            {
                id: v1(),
                title: "Bread",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 2,
                todoListId: "todolistID2"
            },
            {
                id: v1(),
                title: "Cola",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 0,
                todoListId: "todolistID2"
            },
            {
                id: v1(),
                title: "Milk",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 2,
                todoListId: "todolistID2"
            },
            {
                id: v1(),
                title: "Chocolate",
                completed: true,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 2,
                todoListId: "todolistID2"
            },
            {
                id: v1(),
                title: "Fish",
                completed: false,
                order: 0,
                addedDate: "",
                deadline: "",
                startDate: "",
                description: "",
                priority: TaskPriorities.Low,
                status: 0,
                todoListId: "todolistID2"
            },
        ]
    };
})

test("should be add empty array", () => {
    const newTodolist: TodoType = {id: v1(), title: "What to fix", filter: "All", addedDate: "", order: +v1()};
    const action = addTodolistAC(newTodolist.id, newTodolist);
    const newTaskList = taskReducer(tasks, action);
    const keys = Object.keys(newTaskList);

    expect(keys.length).toBe(3);
})

test("should be add task", () => {

    const newTask = {
        id: v1(),
        title: "Fish",
        completed: false,
        order: 0,
        addedDate: "",
        deadline: "",
        startDate: "",
        description: "",
        priority: TaskPriorities.Low,
        status: 0,
        todoListId: "todolistID1"
    }

    const newTaskList = taskReducer(tasks, addTaskAC(newTask));

    expect(newTaskList["todolistID1"].length).toBe(6);
})

test("should be remove task", () => {

    const newTaskList = taskReducer(tasks, removeTaskAC("todolistID1", tasks["todolistID1"][0].id));

    expect(newTaskList["todolistID1"].length).toBe(4);
})

test("should be change task status", () => {

    const newTaskList = taskReducer(tasks, changeTaskStatusAC("todolistID1", tasks["todolistID1"][0].id, TaskStatuses.New));

    expect(newTaskList["todolistID1"][0].status).toBe(0);
})

test("should be change task title", () => {

    const newTaskList = taskReducer(tasks, changeTaskTitleAC("todolistID1", tasks["todolistID1"][0].id, "False"));

    expect(newTaskList["todolistID1"][0].title).toBe("False");
})

test("should be remove tasks list", () => {

    const newTaskList = taskReducer(tasks, removeTodolistAC("todolistID1"));
    const keys = Object.keys(newTaskList);

    expect(keys.length).toBe(1);

    expect(keys[0]).toBe("todolistID2");
})
