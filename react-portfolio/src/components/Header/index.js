import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import bgImage from '../../../src/images/hero-bg.png';

const Header = ({ activeTab, setActiveTab }) => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
        setActiveTab(pathname);
    }, [location, setActiveTab]);

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
                >
                    About Me
                </NavLink>

                <NavLink
                    to="/portfolio"
                    className={`text-4xl m-2 ${activeTab === '/portfolio' ? 'underline font-bold text-blue-400' : ''} hover:text-blue-500`}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/contact"
                    className={`text-4xl m-2 ${activeTab === '/contact' ? 'underline font-bold text-blue-400' : ''} hover:text-blue-500`}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/resume"
                    className={`text-4xl m-2 ${activeTab === '/resume' ? 'underline font-bold text-blue-400' : ''} hover:text-blue-500`}
                >
                    Resume
                </NavLink>
            </nav>
        </header>
    );
}
export default Header;
