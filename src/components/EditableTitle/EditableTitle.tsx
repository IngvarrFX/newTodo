import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import styles from "./EditableTitle.module.css";
import {TextField} from "@material-ui/core";


type EditableTitlePropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const EditableTitle = React.memo((props: EditableTitlePropsType) => {
    const {title, changeTitle} = props;
    const [edit, setEdit] = useState<boolean>(false);
    const [value, setValue] = useState<string>(title)

    const onDoubleClickHandle = useCallback(() => {
        setEdit(true);
    }, []);
    const onBlurHandle = useCallback(() => {
        changeTitle(value);
        setEdit(false);
    }, [changeTitle, value]);
    const onChangeHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, []);

    const onKeyPressHandle = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === "Escape") {
            changeTitle(value);
            setEdit(false);
        }
    }, [changeTitle, value]);
    return (
        <div className={styles.Wrapper}>
            {
                edit
                    ?
                    <TextField style={{width: "100%"}} id="outlined-basic" variant="standard"
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
});
