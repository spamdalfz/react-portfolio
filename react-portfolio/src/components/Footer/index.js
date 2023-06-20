import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-4">
            <h1 className="font-bold text-xl mb-2">Corey Vasser</h1>
            <div className="mb-4">
                <a href="https://github.com/spamdalfz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white m-4">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/corey-vasser/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white m-4">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Corey Vasser</p>
        </footer>
    );
}
export default Footer;