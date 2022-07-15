import React from "react";
import "./App.css";
import {Todolists} from "./components/Todolists";
import {Preloader} from "./components/Preloader";
import {useAppSelector} from "./hooks";

function App() {
    const initializing = useAppSelector(state => state.app.initializing);

    if (initializing) {
        return <div className={"Preloader"}><Preloader/></div>
    }

    return (<div className="App">
            <Todolists/>
        </div>
    );
}

export default App;
