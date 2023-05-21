import './App.css';
import React from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./ProductList/ProductList";
import Form from "./Form/Form";

function App() {

    const{tg,onToggleButton} = useTelegram()

    React.useEffect(() => {
        tg.ready()
    }, [tg])

    return (
        <div className="App">
            <Header/>
                <Routes>
                    <Route index element={<ProductList/>}/>
                    <Route path={'form'} index element={<Form/>}/>
                </Routes>
        </div>
    );
}

export default App;