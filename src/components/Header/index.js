import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ activeTab, setActiveTab }) => {
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header>
            <nav>
                <NavLink
                    to="/about"
                    className={activeTab === '/about' ? 'active-link' : ''}
                    onClick={() => handleTabChange('/about')}
                >
                    About Me
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={activeTab === '/portfolio' ? 'active-link' : ''}
                    onClick={() => handleTabChange('/portfolio')}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    className={activeTab === '/contact' ? 'active-link' : ''}
                    onClick={() => handleTabChange('/contact')}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/resume"
                    className={activeTab === '/resume' ? 'active-link' : ''}
                    onClick={() => handleTabChange('/resume')}
                >
                    Resume
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;