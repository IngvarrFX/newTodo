import React, {useCallback, useEffect} from "react";
import {Button, IconButton} from "@material-ui/core";
import {Task} from "../Task";
import styles from "./Todolist.module.css"
import {AddItemForm} from "../AddItemForm";
import {EditableTitle} from "../EditableTitle";
import {Delete} from "@material-ui/icons";
import {createTaskTC, getTasksTC, removeTaskTC} from "../../store/thunks/taskThunks";
import {FilterType} from "../Todolists/types";
import {TaskStatuses} from "../../api/types";
import {Skeleton} from "../Preloader";
import {useAppSelector} from "../../hooks";
import {useAppDispatch} from "../../hooks/hooks";
import {StatusType} from "../../store/reducers/types";


type TodolistPropsType = {
    todoID: string
    title: string
    entityStatus: StatusType
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
        entityStatus,
        filterTodo,
        filterTask,
        removeTodo,
        changeTodoTitle,
    } = props;

    const tasks = useAppSelector((state) => state.tasks)[todoID];
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTasksTC(todoID))
    }, [])

    const addTaskWrapper = useCallback((title: string) => {
        dispatch(createTaskTC(todoID, title));
    }, [dispatch, todoID]);

    const changeTodoTitleHandle = useCallback((newTitle: string) => {
        changeTodoTitle(newTitle, todoID,);
    }, [changeTodoTitle, todoID])

    const removeTaskHandle = (taskId: string) => {
        dispatch(removeTaskTC(todoID, taskId))
    }

    let tasksForTodolist = tasks

    if (filterTodo === "Active") {
        tasksForTodolist = tasks.filter((t: any) => t.status === TaskStatuses.New)
    }
    if (filterTodo === "Completed") {
        tasksForTodolist = tasks.filter((t: any) => t.status === TaskStatuses.Completed)
    }

    if (!tasks) {
        return <Skeleton/>
    }

    const inProcess = entityStatus === "loading";

    return (
        <div className={styles.Wrapper} >
            <div className={styles.TasksBlock}>
                <div className={styles.InputBlock}>
                    <div style={{
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <EditableTitle title={title} changeTitle={changeTodoTitleHandle} disabled={inProcess}/>
                        <IconButton aria-label="delete" size="medium" onClick={() => removeTodo(todoID)} disabled={inProcess}>
                            <Delete color={"inherit"}/>
                        </IconButton>
                    </div>
                    <div style={{marginBottom: "10px", display: "flex"}}>
                        <AddItemForm placeholder={"New task"} callback={addTaskWrapper} disabled={inProcess}/>
                    </div>
                </div>

                <div className={styles.tasksWrapper}>
                    {tasksForTodolist.map((task: any) => {
                        return <div className={styles.tasks}
                                    key={task.id}>
                            <Task
                                task={task}
                                todoId={todoID}
                                status={inProcess}

                            />
                            <IconButton aria-label="delete" size="medium"
                                        onClick={() => removeTaskHandle(task.id)} disabled={inProcess}>
                                <Delete color={"inherit"}/>
                            </IconButton>
                        </div>
                    })}
                </div>
            </div>

            <div className={styles.FilterBtn}>
                {filter.map((filterType, index) => {
                    return <div
                        key={index}>
                        <Button variant={"text"} color={"primary"}
                                style={{backgroundColor: filterTodo === filterType.filter ? "aquamarine" : ""}}
                                onClick={() => filterTask(todoID, filterType.filter)} disabled={inProcess}>{filterType.filter}</Button>
                    </div>
                })}
            </div>

        </div>
    );
});
