import {v1} from "uuid";
import {TasksType} from "../../App";
import {taskReducer} from "./taskReducer";
import {
    addTaskAC,
    addTodolistAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    removeTaskAC,
    removeTodolistAC
} from "../actions";

let tasks: TasksType;

beforeEach(() => {
    tasks = {
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
    };
})

test("should be add empty array", () => {
    const newTaskList = taskReducer(tasks, addTodolistAC(v1(),"New Todo"));
    const keys = Object.keys(newTaskList);

    expect(keys.length).toBe(3);
})

test("should be add task", () => {

    const newTaskList = taskReducer(tasks, addTaskAC("todolistID1", "New Task"));

    expect(newTaskList["todolistID1"].length).toBe(6);
})

test("should be remove task", () => {

    const newTaskList = taskReducer(tasks, removeTaskAC("todolistID1", tasks["todolistID1"][0].id));

    expect(newTaskList["todolistID1"].length).toBe(4);
})

test("should be change task status", () => {

    const newTaskList = taskReducer(tasks, changeTaskStatusAC("todolistID1", tasks["todolistID1"][0].id, false));

    expect(newTaskList["todolistID1"][0].isDone).toBe(false);
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
