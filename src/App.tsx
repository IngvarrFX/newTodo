import React from "react";
import "./App.css";
import {Todolists} from "./components/Todolists";
import {Preloader} from "./components/Preloader";
import {useAppSelector} from "./hooks";

function App() {

    const initialize = useAppSelector(state => state.app.initializing);

    if (initialize) {
        return <div style={{top: "50%", left:"50%"}}><Preloader/></div>
    }

    return (<div className="App">
            <Todolists/>
        </div>
    );
}

export default App;
