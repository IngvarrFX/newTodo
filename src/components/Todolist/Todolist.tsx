import React from "react";
import {Button, IconButton} from "@material-ui/core";
import {FilterType, TasksType} from "../../App";
import {Task} from "../Task";
import styles from "./Todolist.module.css"
import {AddItemForm} from "../AddItemForm";
import {EditableTitle} from "../EditableTitle";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, removeTaskAC} from "../../store/actions";
import {AppStateType} from "../../store/store";


type TodolistPropsType = {
    todoID: string
    title: string
    filterTodo: FilterType
    filterTask: (todoID: string, filter: FilterType) => void
    removeTodo: (todoId: string) => void
    changeTodoTitle: (newTitle: string, id: string) => void
}


export const Todolist = (props: TodolistPropsType) => {
    const filter: Array<{ filter: FilterType }> = [
        {filter: "All"},
        {filter: "Completed"},
        {filter: "Active"},
    ]
    const {
        todoID,
        title,
        filterTodo,
        filterTask,
        removeTodo,
        changeTodoTitle,
    } = props;

    const tasks = useSelector<AppStateType, TasksType>((state) => state.tasks);
    const dispatch = useDispatch();

    const addTaskWrapper = (title: string) => {
        dispatch(addTaskAC(todoID, title));
    };

    const changeTodoTitleHandle = (newTitle: string) => {
        changeTodoTitle(newTitle, todoID,);
    }

    let filteredTasks = tasks[todoID];
    if (filterTodo === "Completed") {
        filteredTasks = tasks[todoID].filter((task) => task.isDone);
    }
    if (filterTodo === "Active") {
        filteredTasks = tasks[todoID].filter((task) => !task.isDone);
    }

    return (
        <div className={styles.Wrapper}>
            <div className={styles.TasksBlock}>
                <div style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <EditableTitle title={title} changeTitle={changeTodoTitleHandle}/>
                    <IconButton aria-label="delete" size="medium" onClick={() => removeTodo(todoID)}>
                        <Delete color={"inherit"}/>
                    </IconButton>
                </div>
                <div style={{marginBottom: "10px", display: "flex"}}>
                    <AddItemForm placeholder={"New task"} callback={addTaskWrapper}/>
                </div>


                {filteredTasks.map((task) => {
                    return <div
                        style={{display: "flex", marginBottom: "5px", justifyContent: "space-between", width: "100%"}}
                        key={task.id}>
                        <Task
                            task={task}
                            todoId={todoID}
                        />
                        <IconButton aria-label="delete" size="medium"
                                    onClick={() => dispatch(removeTaskAC(todoID, task.id))}>
                            <Delete color={"inherit"}/>
                        </IconButton>
                    </div>
                })}
            </div>

            <div className={styles.FilterBtn}>
                {filter.map((filterType, index) => {
                    return <div
                        key={index}>
                        <Button variant={"text"} color={"primary"}
                                style={{backgroundColor: filterTodo === filterType.filter ? "aquamarine" : ""}}
                                onClick={() => filterTask(todoID, filterType.filter)}>{filterType.filter}</Button>
                    </div>
                })}
            </div>

        </div>
    );
};
