import './App.css';
import React from 'react'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./UI/NavBar";
import AppRouter from "./component/AppRouter";


function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );

}

export default App;
