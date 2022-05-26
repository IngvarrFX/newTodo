import React from "react";
import "./App.css";
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./store/actions";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type TasksType = {
    [key: string]: Array<TaskType>
}

export type TodoType = {
    id: string
    title: string
    filter: FilterType
}

export type FilterType = "All" | "Completed" | "Active";

function App() {

    const todolists = useSelector<AppStateType, TodoType[]>((state) => state.todolists);
    const dispatch = useDispatch();

    const addTodolist = (title: string) => {
        let id = v1()
        dispatch(addTodolistAC(id, title));
    }

    const changeTodoTitle = (newTitle: string, id: string) => {
        dispatch(changeTodolistTitleAC(id, newTitle));
    }

    const removeTodo = (todoId: string) => {
        dispatch(removeTodolistAC(todoId));
    }

    const changeFilter = (todoID: string, filter: FilterType) => {
        dispatch(changeTodolistFilterAC(todoID, filter));
    }

    return (<div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className={"AddField"}>
                <AddItemForm placeholder={"New todolist"} callback={addTodolist}/>
            </div>
            <div className={"Todolists"}>
                {todolists.map((todo) => {
                    return <Todolist
                        key={todo.id}
                        todoID={todo.id}
                        title={todo.title}
                        filterTodo={todo.filter}
                        filterTask={changeFilter}
                        removeTodo={removeTodo}
                        changeTodoTitle={changeTodoTitle}
                    />
                })
                }
            </div>
        </div>
    );
}

export default App;
