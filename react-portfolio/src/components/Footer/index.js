import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-4">
            <h1 className="font-bold text-xl mb-2">Corey Vasser</h1>
            <p className="text-sm">&copy; {new Date().getFullYear()} Corey Vasser</p>
        </footer>
    );
}

export default Footer;
