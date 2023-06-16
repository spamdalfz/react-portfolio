import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ activeTab, setActiveTab }) => {
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header className="bg-black text-white p-5">
            <nav className="flex justify-around">
                <NavLink
                    to="/about"
                    className={activeTab === '/about' ? 'text-lg font-bold' : 'text-lg'}
                    onClick={() => handleTabChange('/about')}
                >
                    About Me
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={activeTab === '/portfolio' ? 'text-lg font-bold' : 'text-lg'}
                    onClick={() => handleTabChange('/portfolio')}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    className={activeTab === '/contact' ? 'text-lg font-bold' : 'text-lg'}
                    onClick={() => handleTabChange('/contact')}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/resume"
                    className={activeTab === '/resume' ? 'text-lg font-bold' : 'text-lg'}
                    onClick={() => handleTabChange('/resume')}
                >
                    Resume
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
