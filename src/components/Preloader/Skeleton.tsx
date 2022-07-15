import React from "react";
import styles from "./Skeleton.module.css"


export const Skeleton = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.todoHeader}>
                <div className={styles.title}></div>
                <div className={styles.deleteBtn}></div>
            </div>
            <div className={styles.todoHeader}>
                <div className={styles.input}></div>
                <div className={styles.addBtn}></div>
            </div>
            <div className={styles.tasksBlock}>
                <div className={styles.taskBlock}>
                    <div className={styles.title}></div>
                    <div className={styles.deleteBtn}></div>
                </div>
                <div className={styles.taskBlock}>
                    <div className={styles.title}></div>
                    <div className={styles.deleteBtn}></div>
                </div>
                <div className={styles.taskBlock}>
                    <div className={styles.title}></div>
                    <div className={styles.deleteBtn}></div>
                </div>
                <div className={styles.taskBlock}>
                    <div className={styles.title}></div>
                    <div className={styles.deleteBtn}></div>
                </div>
            </div>
            <div className={styles.btnBlock}>
                <div className={styles.all}></div>
                <div className={styles.all}></div>
                <div className={styles.all}></div>
            </div>
        </div>
    );
}
