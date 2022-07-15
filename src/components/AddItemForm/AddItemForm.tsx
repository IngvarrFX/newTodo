import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import styles from "./AddForm.module.css";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";


type AddItemFormPropsType = {
    placeholder: string
    callback: (title: string) => void
    disabled?: boolean
}
export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    const {placeholder, callback, disabled} = props;
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState("");

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError("");
        setValue(e.currentTarget.value);
    }

    const onKeyPressHandle = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && value.trim() !== "") {
            callback(value);
            setValue("");
            setError("");
        } else {
            setError("Field is require!")
        }
    }

    const addItem = () => {
        if (value.trim() && value !== "") {
            callback(value);
            setValue("");
        } else {
            setError("Field is require!")
        }
    }

    return (
        <div className={styles.AddItemForm}>
            <div className={styles.wrapper}>
                <TextField label={placeholder} variant="outlined"
                           className={styles.Input}
                           placeholder={placeholder}
                           value={value}
                           onChange={onChangeHandle}
                           onKeyPress={onKeyPressHandle}
                           error={!!error}
                           helperText={error}
                           disabled={disabled}

                />
            </div>
            <div className={styles.Icon}>
                <IconButton aria-label="add" size="medium" onClick={addItem} disabled={disabled}>
                    <AddBox color={"inherit"}/>
                </IconButton>
            </div>
        </div>

    );
})
