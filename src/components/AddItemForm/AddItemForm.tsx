import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import styles from "./AddForm.module.css";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";


type AddItemFormPropsType = {
    placeholder: string
    callback: (title: string) => void
}
export const AddItemForm = (props: AddItemFormPropsType) => {
    const {placeholder, callback} = props;
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState("");


    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        setError("");
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
                <TextField id="outlined-basic" label={placeholder} variant="outlined"
                           className={styles.Input}
                           placeholder={placeholder}
                           value={value}
                           onChange={onChangeHandle}
                           onKeyPress={onKeyPressHandle}
                           error={!!error}
                           helperText={error}

                />
            </div>
            <div className={styles.Icon}>
                <IconButton aria-label="add" size="medium" onClick={addItem}>
                    <AddBox color={"inherit"}/>
                </IconButton>
                {/*{error && <div className={styles.error}>{error}</div>}*/}
            </div>
        </div>

    );
};
