import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import styles from "./EditableTitle.module.css";
import {TextField} from "@material-ui/core";


type EditableTitlePropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const EditableTitle = (props: EditableTitlePropsType) => {
    const {title, changeTitle} = props;
    const [edit, setEdit] = useState<boolean>(false);
    const [value, setValue] = useState<string>(title)

    const onDoubleClickHandle = () => {
        setEdit(true);
    }
    const onBlurHandle = () => {
        changeTitle(value);
        setEdit(false);
    }
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onKeyPressHandle = (e: KeyboardEvent<HTMLDivElement>)=> {
        if (e.key === "Enter" || e.key === "Escape") {
            changeTitle(value);
            setEdit(false);
        }
    }
    return (
        <div className={styles.Wrapper}>
            {
                edit
                    ?
                    <TextField style={{width: "100%"}} id="outlined-basic" variant='standard'
                               className={styles.Input}
                               value={value}
                               onChange={onChangeHandle}
                               onKeyPress={onKeyPressHandle}
                               onBlur={onBlurHandle}
                               autoFocus

                    />
                    : <span onDoubleClick={onDoubleClickHandle}>{title}</span>
            }
        </div>
    );
};
