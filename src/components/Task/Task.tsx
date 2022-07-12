import React from "react";
import styles from "./Task.module.css"
import {EditableTitle} from "../EditableTitle";
import Checkbox from "@material-ui/core/Checkbox";
import {TaskStatuses} from "../../api/types";
import {updateTaskTC} from "../../store/thunks/taskThunks";
import {useAppDispatch} from "../../hooks/hooks";


type TaskPropsType = {
    task: any
    todoId: string
}

export const Task = React.memo((props: TaskPropsType) => {
    const {task, todoId} = props;
    const dispatch = useAppDispatch();

    const color = task.status ? "0.5" : "1";

    const onChangeTaskTitle = (newTitle: string) => {
        if (newTitle !== task.title) {
            dispatch(updateTaskTC(todoId, task.id, task.title, task.status))
        }
    }

    const onChangeTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        const taskStatus = e.currentTarget.checked;
        dispatch(updateTaskTC(todoId, task.id, task.title, taskStatus ? TaskStatuses.Completed : TaskStatuses.New))
    }

    return (
        <div className={styles.TaskBlock}>
            <Checkbox checked={task.status === TaskStatuses.Completed} color="primary"
                      onChange={onChangeTaskStatus}/>
            <div style={{marginRight: "5px", opacity: color, width: "80%"}}>
                <EditableTitle title={task.title}
                               changeTitle={onChangeTaskTitle}
                />
            </div>
        </div>
    );
});
