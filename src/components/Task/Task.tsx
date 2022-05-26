import React from "react";
import {TaskType} from "../../App";
import styles from "./Task.module.css"
import {EditableTitle} from "../EditableTitle";
import Checkbox from "@material-ui/core/Checkbox";
import {changeTaskStatusAC, changeTaskTitleAC} from "../../store/actions";
import {useDispatch} from "react-redux";


type TaskPropsType = {
    task: TaskType
    todoId: string
}

export const Task = React.memo((props: TaskPropsType) => {
    const {task, todoId} = props;
    const dispatch = useDispatch();
    const color = task.isDone ? "0.5" : "1";
    return (
        <div className={styles.TaskBlock}>
            <Checkbox checked={task.isDone} color="primary"
                      onChange={(e) => dispatch(changeTaskStatusAC(todoId, task.id, e.currentTarget.checked))}/>
            <div style={{marginRight: "5px", opacity: color}}>
                <EditableTitle title={task.title}
                               changeTitle={(newTitle) => dispatch(changeTaskTitleAC(todoId, task.id, newTitle))}
                />
            </div>
        </div>
    );
});
