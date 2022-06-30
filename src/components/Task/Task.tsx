import React, {Dispatch} from "react";
import styles from "./Task.module.css"
import {EditableTitle} from "../EditableTitle";
import Checkbox from "@material-ui/core/Checkbox";
import {useDispatch} from "react-redux";
import {TaskStatus} from "../../api/types";
import {updateTaskTC} from "../../store/thunks/taskThunks";


type TaskPropsType = {
    task: any
    todoId: string
}

export const Task = React.memo((props: TaskPropsType) => {
    const {task, todoId} = props;
    const dispatch: Dispatch<any> = useDispatch();

    const color = task.status ? "0.5" : "1";

    const onChangeTaskTitle = (newTitle: string) => {
        if (newTitle !== task.title) {
            dispatch(updateTaskTC(todoId, task.id, newTitle, task.status))
        }
    }

    const onChangeTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        const taskStatus = e.currentTarget.checked;
        dispatch(updateTaskTC(todoId, task.id, task.title, taskStatus ? TaskStatus.isDone : TaskStatus.notIsDone))
    }

    return (
        <div className={styles.TaskBlock}>
            <Checkbox checked={task.status === TaskStatus.isDone} color="primary"
                      onChange={onChangeTaskStatus}/>
            <div style={{marginRight: "5px", opacity: color}}>
                <EditableTitle title={task.title}
                               changeTitle={onChangeTaskTitle}
                />
            </div>
        </div>
    );
});
