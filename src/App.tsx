import React from "react";
import "./App.css";
import {Todolists} from "./components/Todolists";
import {useSelector} from "react-redux";
import {AppStateType} from "./store/store";

function App() {

    const initialize = useSelector<AppStateType, boolean>(state => state.app.initializing);

    if(initialize){
        return <div>Loading Todolists...</div>
    }

    return (<div className="App">
            <Todolists/>
        </div>
    );
}

export default App;
