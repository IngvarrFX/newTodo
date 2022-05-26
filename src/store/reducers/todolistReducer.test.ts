import {TodoType} from "../../App";
import {todolistReducer} from "./todolistReducer";
import {addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "../actions";
import {v1} from "uuid";

let todolists: Array<TodoType>;

beforeEach(() => {
    todolists = [
        {id: "todolistID1", title: "What to learn", filter: "All"},
        {id: "todolistID2", title: "What to need", filter: "All"},
    ];
})

test("shoud be add todolist", () => {
    const newTodo = todolistReducer(todolists, addTodolistAC(v1(),"New Todo"));

    expect(newTodo.length).toBe(3);
    expect(newTodo[0].title).toBe("New Todo");
})

test("shoud be remove todolist", () => {
    const newTodo = todolistReducer(todolists, removeTodolistAC("todolistID1"));

    expect(newTodo.length).toBe(1);
    expect(newTodo[0].title).toBe("What to need");
})

test("shoud be change todolist filter", () => {
    const newTodo = todolistReducer(todolists, changeTodolistFilterAC("todolistID1", "Completed"));

    expect(newTodo[0].filter).toBe("Completed");
    expect(newTodo[1].filter).toBe("All");
})

test("shoud be change todolist title", () => {
    const newTodo = todolistReducer(todolists, changeTodolistTitleAC("todolistID1", "Title was changed!"));

    expect(newTodo[0].title).toBe("Title was changed!");
    expect(newTodo[1].title).toBe("What to need");
})
