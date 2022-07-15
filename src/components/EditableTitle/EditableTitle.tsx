import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import styles from "./EditableTitle.module.css";
import {TextField} from "@material-ui/core";


type EditableTitlePropsType = {
    title: string
    changeTitle: (newTitle: string) => void
    disabled?: boolean
}

export const EditableTitle = React.memo((props: EditableTitlePropsType) => {
    const {title, changeTitle, disabled} = props;
    const [edit, setEdit] = useState<boolean>(false);
    const [value, setValue] = useState<string>(title)

    const onDoubleClickHandle = useCallback(() => {
        if (disabled) {
            return;
        }
        setEdit(true);
    }, [disabled]);

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
                    <TextField id="outlined-basic" variant="standard"
                               className={styles.Input}
                               value={value}
                               onChange={onChangeHandle}
                               onKeyPress={onKeyPressHandle}
                               onBlur={onBlurHandle}
                               autoFocus
                               disabled={disabled}

                    />
                    : <div className={disabled ?styles.title + " " + styles.disabled : styles.title} onDoubleClick={onDoubleClickHandle}>{title}</div>
            }
        </div>
    );
});
