import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"

type ModalPropsType = {
    isShow: boolean
    title: string
    closeModal: (value: boolean) => void
    children: React.ReactNode
}

export const Modal = (props: ModalPropsType) => {
    const {isShow, title, closeModal, children} = props;

    const onCloseHandle = () => {
        closeModal(false)
    }

    if (!isShow) {
        return null;
    }
    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay} onClick={onCloseHandle}/>
            <div className={styles.wrapper}>
                <div className={styles.headerModal}>
                    <h1>{title}</h1>
                    <div className={styles.close} onClick={onCloseHandle}></div>
                </div>
                <div className={styles.otherContent}>
                    {children}
                </div>
            </div>
        </>
        ,
        document.getElementById("portal") as HTMLElement
    )
};
