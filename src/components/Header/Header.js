import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-black text-white py-6 text-center">
            <h1 className="text-5xl pb-3 text-blue-500 font-extrabold">Restaurant Listing App</h1>
            <nav className="flex justify-center">
                <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="nav-link-active" to="/search">Search</NavLink>
                <NavLink className="nav-link" activeClassName="nav-link-active" to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;
