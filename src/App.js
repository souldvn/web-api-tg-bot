import './App.css';
import React from "react";


function App() {

    React.useEffect(() =>{tg.ready()}, [])
    const tg = window.Telegram.WebApp
    const onClose = () =>{
        tg.close()
    }

    return (
        <div className="App">
            reberb
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;