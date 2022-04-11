import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__items">
                <Link to="/about">About</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default NavBar;