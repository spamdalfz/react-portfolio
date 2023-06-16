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
                    className={`text-xl ${activeTab === '/about' ? 'underline text-teal-500' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/about')}
                >
                    About Me
                </NavLink>

                <NavLink
                    to="/portfolio"
                    className={`text-xl ${activeTab === '/portfolio' ? 'underline text-teal-500' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/portfolio')}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    className={`text-xl ${activeTab === '/contact' ? 'underline text-teal-500' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/contact')}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/resume"
                    className={`text-xl ${activeTab === '/resume' ? 'underline text-teal-500' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/resume')}
                >
                    Resume
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
