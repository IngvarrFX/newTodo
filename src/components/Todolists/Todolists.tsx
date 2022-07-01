import React, {Dispatch, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {changeTodolistFilterAC} from "../../store/actions";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {AddItemForm} from "../AddItemForm";
import {Todolist} from "../Todolist";
import {FilterType, TodoType} from "./types";
import styles from "./Todolists.module.css";
import {addTodolistTC, getTodolistsTC, removeTodolistTC, updateTodolistTC} from "../../store/thunks/todoThunks";

export const Todolists = () => {

    const todolists = useSelector<AppStateType, TodoType[]>((state) => state.todolists);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        if (!todolists.length) {
            dispatch(getTodolistsTC())
        }
    }, [])

    const addTodolist = useCallback(
        (title: string) => {
            dispatch(addTodolistTC(title));
        },
        [dispatch]
    );

    const changeTodoTitle = useCallback((newTitle: string, id: string) => {
        dispatch(updateTodolistTC(id, newTitle))
    }, [dispatch]);

    const removeTodo = useCallback((todoId: string) => {
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
