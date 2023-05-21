import './App.css';
import React from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {

    const{tg,onToggleButton} = useTelegram()

    React.useEffect(() => {
        tg.ready()
    }, [tg])

    return (
        <div className="App">
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;