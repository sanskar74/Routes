import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}
export default Navbar;