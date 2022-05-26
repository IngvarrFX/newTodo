import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./Input.module.css"

type InputPropsType = {
    placeholder: string
    callBack: (title: string) => void
    value: string
    addItem: (title: string) => void
}

export const Input = React.memo((props: InputPropsType) => {
    const {placeholder, value, callBack, addItem} = props;

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.value)
    }

    const onKeyPressHandle = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && value) {
            addItem(value.trim());
            callBack("");
        }
    }
    return (
        <div>
            <input placeholder={placeholder} value={value} onChange={onChangeHandle} onKeyPress={onKeyPressHandle}/>
        </div>
    );
});
