import {todolistReducer} from "./todolistReducer";
import {addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "../actions";
import {v1} from "uuid";
import {TodoType} from "../../components/Todolists/types";

let todolists: Array<TodoType>;

beforeEach(() => {
    todolists = [
        {id: "todolistID1", title: "What to learn", filter: "All", addedDate: "", order: +v1()},
        {id: "todolistID2", title: "What to need", filter: "All", addedDate: "", order: +v1()},
    ];
})

test("shoud be add todolist", () => {
    const newTodolist: TodoType = {id: "todolistID1", title: "What to fix", filter: "All", addedDate: "", order: +v1()};
    const newTodo = todolistReducer(todolists, addTodolistAC(newTodolist.id, newTodolist));

    expect(newTodo.length).toBe(3);
    expect(newTodo[0].title).toBe("What to fix");
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
