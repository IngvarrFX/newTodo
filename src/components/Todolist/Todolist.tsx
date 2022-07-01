import React, {Dispatch, useCallback, useEffect} from "react";
import {Button, IconButton} from "@material-ui/core";
import {Task} from "../Task";
import styles from "./Todolist.module.css"
import {AddItemForm} from "../AddItemForm";
import {EditableTitle} from "../EditableTitle";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {createTaskTC, getTasksTC, removeTaskTC} from "../../store/thunks/taskThunks";
import {FilterType} from "../Todolists/types";
import {TaskStatuses} from "../../api/types";
import {Preloader} from "../Preloader";


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

    const tasks = useSelector<AppStateType, any>((state) => state.tasks)[todoID];
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getTasksTC(todoID))
    }, [])

    const addTaskWrapper = useCallback((title: string) => {
        dispatch(createTaskTC(todoID, title));
    }, [dispatch, todoID]);

    const changeTodoTitleHandle = useCallback((newTitle: string) => {
        changeTodoTitle(newTitle, todoID,);
    }, [changeTodoTitle, todoID])

    let tasksForTodolist = tasks

    if (filterTodo === "Active") {
        tasksForTodolist = tasks.filter((t: any) => t.status === TaskStatuses.Completed)
    }
    if (filterTodo === "Completed") {
        tasksForTodolist = tasks.filter((t: any) => t.status === TaskStatuses.New)
    }

    if (!tasks) {
        return <Preloader/>
    }

    return (
        <div className={styles.Wrapper}>
            <div className={styles.TasksBlock}>
                <div className={styles.InputBlock}>
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
                </div>

                <div  className={styles.tasksWrapper}>
                    {tasksForTodolist.map((task: any) => {
                        return <div className={styles.tasks}
                                    key={task.id}>
                            <Task
                                task={task}
                                todoId={todoID}
                            />
                            <IconButton aria-label="delete" size="medium"
                                        onClick={() => dispatch(removeTaskTC(todoID, task.id))}>
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
                                onClick={() => filterTask(todoID, filterType.filter)}>{filterType.filter}</Button>
                    </div>
                })}
            </div>

        </div>
    );
});
