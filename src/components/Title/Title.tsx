import React from "react";


type TitlePropsType = {
    title: string
}

export const Title = React.memo((props: TitlePropsType) => {
    const {title} = props;
    return (
        <div>
            {title}
        </div>
    );
});
