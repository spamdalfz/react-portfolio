import React from 'react';
import profilePic from './images/profile-pic.jpg';

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center bg-gray-800 text-blue-400 min-h-screen py-10 px-4 md:px-20 font-josefin">
            <img src={profilePic} alt="Corey Vasser" className="w-28 h-28 rounded-full mx-auto md:mx-0 shadow-lg md:mb-0 md:mr-10" />
            <div className="text-center md:text-left space-y-4 w-full md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">About Me</h1>
                <p className="text-lg md:text-xl">Hello! I'm Corey 👋, a dedicated Web Developer based in the beautiful Pacific Northwest. I hold a strong passion for computer science, with a particular focus on full-stack development and mastery of JavaScript.</p>
                <p className="text-lg md:text-xl">I pride myself on being more than just a developer. I am a problem-solver at heart, always eager to dive into challenging situations and find efficient, creative solutions. I consider every problem as an opportunity to learn, grow, and refine my skills.</p>
                <p className="text-lg md:text-xl">In the ever-evolving world of web development, continuous learning is not an option - it's a necessity. I strive to stay updated with the latest industry trends and technologies, continuously pushing my boundaries to design and develop innovative web solutions that not only meet but exceed client expectations.</p>
                <p className="text-lg md:text-xl">Beyond my technical skills, I am a strong communicator and team player. I believe in the power of collaboration to create robust and sustainable solutions, and I'm always open to fresh perspectives.</p>
                <p className="text-lg md:text-xl">Outside of my professional life, I find joy in being a father, appreciating life's simple pleasures, playing disc golf, and exploring the diverse landscapes that our Pacific Northwest has to offer.</p>
                <p className="text-lg md:text-xl">I look forward to bringing my passion, dedication, and expertise to new opportunities and challenges. Let's build the digital future together!</p>
            </div>
        </div>
    )
};

export default AboutMe;