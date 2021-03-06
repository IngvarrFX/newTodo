import React, {useCallback, useEffect} from "react";
import {changeTodolistFilterAC} from "../../store/actions";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {AddItemForm} from "../AddItemForm";
import {Todolist} from "../Todolist";
import {FilterType} from "./types";
import styles from "./Todolists.module.css";
import {addTodolistTC, getTodolistsTC, removeTodolistTC, updateTodolistTC} from "../../store/thunks/todoThunks";
import {useAppSelector} from "../../hooks";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";

export const Todolists = () => {

    const todolists = useAppSelector(state => state.todolists)
    const dispatch:Dispatch = useDispatch();

    useEffect(() => {
        if (!todolists.length) {
            // @ts-ignore
            dispatch(getTodolistsTC())
        }
    }, [])

    const addTodolist = useCallback(
        (title: string) => {
            // @ts-ignore
            dispatch(addTodolistTC(title));
        },
        [dispatch]
    );

    const changeTodoTitle = useCallback((newTitle: string, id: string) => {
        // @ts-ignore
        dispatch(updateTodolistTC(id, newTitle))
    }, [dispatch]);

    const removeTodo = useCallback((todoId: string) => {
        // @ts-ignore
        dispatch(removeTodolistTC(todoId));
    }, [dispatch]);

    const changeFilter = useCallback((todoID: string, filter: FilterType) => {
        dispatch(changeTodolistFilterAC(todoID, filter));
    }, [dispatch]);

    return (
        <div className={styles.todoWrapper}>
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
            <div className={styles.AddField}>
                <AddItemForm placeholder={"New todolist"} callback={addTodolist}/>
            </div>
            <div className={styles.Todolists}>
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
};
