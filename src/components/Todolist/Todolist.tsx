import React, {useCallback, useMemo} from "react";
import {Button, IconButton} from "@material-ui/core";
import {FilterType, TasksType, TaskType} from "../../App";
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


export const Todolist = React.memo((props: TodolistPropsType) => {

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

    const tasks = useSelector<AppStateType, TasksType>((state) => state.tasks)[todoID].filter((task)=> {
        if (filterTodo === "Completed") {
                    return task.isDone;
                }
                if (filterTodo === "Active") {
                    return !task.isDone;
                }
                return task;
    });

    const dispatch = useDispatch();

    const addTaskWrapper = useCallback((title: string) => {
        dispatch(addTaskAC(todoID, title));
    },[]);

    const changeTodoTitleHandle = useCallback((newTitle: string) => {
        changeTodoTitle(newTitle, todoID,);
    },[])

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


                {tasks.map((task) => {
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
});
