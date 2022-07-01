import React from "react";
import "./App.css";
import {Todolists} from "./components/Todolists";
import {useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {Preloader} from "./components/Preloader";

function App() {

    const initialize = useSelector<AppStateType, boolean>(state => state.app.initializing);

    if (initialize) {
        return <div style={{top: "50%", left:"50%"}}><Preloader/></div>
    }

    return (<div className="App">
            <Todolists/>
        </div>
    );
}

export default App;
