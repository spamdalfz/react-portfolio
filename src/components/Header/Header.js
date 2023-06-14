import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setActiveTab }) => {
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header>
            <nav>
                <NavLink to="/about" onClick={() => handleTabChange('/about')}>About Me</NavLink>
                <NavLink to="/portfolio" onClick={() => handleTabChange('/portfolio')}>Portfolio</NavLink>
                <NavLink to="/contact" onClick={() => handleTabChange('/contact')}>Contact</NavLink>
                <NavLink to="/resume" onClick={() => handleTabChange('/resume')}>Resume</NavLink>
            </nav>
        </header>
    );
}

export default Header;