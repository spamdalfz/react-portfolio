import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import bgImage from '../../../src/images/hero-bg.png';

const Header = ({ activeTab, setActiveTab }) => {
    const location = useLocation();

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname, setActiveTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover'
            }}
            className="bg-black text-white text-6xl p-20 font-dancing"
        >
            <nav className="flex flex-wrap justify-around">
                <NavLink
                    to="/about"
                    className={`text-4xl m-2 ${activeTab === '/about' ? 'underline font-bold text-blue-400' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/about')}
                >
                    About Me
                </NavLink>

                <NavLink
                    to="/portfolio"
                    className={`text-4xl m-2 ${activeTab === '/portfolio' ? 'underline font-bold text-blue-400' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/portfolio')}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    className={`text-4xl m-2 ${activeTab === '/contact' ? 'underline font-bold text-blue-400' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/contact')}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/resume"
                    className={`text-4xl m-2 ${activeTab === '/resume' ? 'underline font-bold text-blue-400' : ''} hover:text-blue-500`}
                    onClick={() => handleTabChange('/resume')}
                >
                    Resume
                </NavLink>
            </nav>
        </header>
    );
}
export default Header;
