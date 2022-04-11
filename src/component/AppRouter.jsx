import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/404" element={<Error/>}/>
            {/*<Route path='*' elment={<Navigate replace to ="/404"/>}/>*/}
        </Routes>
    );
};

export default AppRouter;