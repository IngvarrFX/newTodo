import React from "react";
import {Box, CircularProgress} from "@material-ui/core";

export const Preloader = () => {
    return (<Box sx={{display: "flex"}}>
            <CircularProgress size={"70px"}/>
        </Box>
    );
};
