import React, {Dispatch, useCallback, useEffect} from "react";
import {Box, Button, CircularProgress, IconButton} from "@material-ui/core";
import {Task} from "../Task";
import styles from "./Todolist.module.css"
import {AddItemForm} from "../AddItemForm";
import {EditableTitle} from "../EditableTitle";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {removeTaskAC} from "../../store/actions";
import {AppStateType} from "../../store/store";
import {createTaskTC, getTasksTC} from "../../store/thunks/taskThunks";
import {FilterType} from "../Todolists/types";
import {TaskStatus} from "../../api/types";


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

    const tasks = useSelector<AppStateType, any>((state) => state.tasks)[todoID]
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
        tasksForTodolist = tasks.filter((t: any) => t.status === TaskStatus.isDone)
    }
    if (filterTodo === "Completed") {
        tasksForTodolist = tasks.filter((t: any) => t.status === TaskStatus.notIsDone)
    }

    if (!tasks) {
        return <Box sx={{display: "flex"}}>
            <CircularProgress size={"30px"}/>
        </Box>
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

                {tasksForTodolist.map((task: any) => {
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
