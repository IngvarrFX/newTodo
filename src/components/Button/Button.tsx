import React from "react";

import styles from "./Button.module.css";

type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

export const Button = React.memo((props: ButtonPropsType) => {
    const {title, callBack, disabled} = props;
    return (<button className={styles.button} disabled={disabled} onClick={callBack}>{title}</button>
    );
});
