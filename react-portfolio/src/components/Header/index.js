import React from "react";
import { NavLink } from "react-router-dom";
import bgImage from '../Header/images/hero-bg.png';

const Header = ({ activeTab, setActiveTab }) => {
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover'
            }}
            className="bg-black text-white text-6xl p-20"
        >
            <nav className="flex justify-around">
                <NavLink
                    to="/about"
                    className={`${activeTab === '/about' ? 'text-lg font-bold' : 'text-lg'} hover:text-blue-500`}
                    onClick={() => handleTabChange('/about')}
                >
                    About Me
                </NavLink>

                <NavLink
                    to="/portfolio"
                    className={`${activeTab === '/portfolio' ? 'text-lg font-bold' : 'text-lg'} hover:text-blue-500`}
                    onClick={() => handleTabChange('/portfolio')}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    className={`${activeTab === '/contact' ? 'text-lg font-bold' : 'text-lg'} hover:text-blue-500`}
                    onClick={() => handleTabChange('/contact')}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/resume"
                    className={`${activeTab === '/resume' ? 'text-lg font-bold' : 'text-lg'} hover:text-blue-500`}
                    onClick={() => handleTabChange('/resume')}
                >
                    Resume
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
