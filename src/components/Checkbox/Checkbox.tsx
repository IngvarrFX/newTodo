import React, {ChangeEvent} from "react";

type CheckboxPropsType = {
    checked: boolean
    callBack: (value: boolean) => void
}

export const Checkbox = React.memo((props: CheckboxPropsType) => {
    const {checked, callBack} = props;

    const onCheckHandle = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.checked);
    }
    return (<input onChange={onCheckHandle} type="checkbox" checked={checked}/>
    );
});
