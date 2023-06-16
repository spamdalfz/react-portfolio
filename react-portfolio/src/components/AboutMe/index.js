import React from 'react';
import profilePic from './images/profile-pic.jpg';


const AboutMe = () => {
    return (
        <div className="container mx-auto px-4 md:px-0 bg-primary text-secondary">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 pt-20">
                <img src={profilePic} alt="Corey Vasser" className="w-32 h-32 md:w-64 md:h-64 rounded-full mx-auto shadow-lg" />
                <div className="mt-10 md:mt-0 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Corey Vasser</h1>

                    <p className="text-lg md:text-xl">Hello! I'm Corey 👋, a dedicated Web Developer based in the beautiful Pacific Northwest. I hold a strong passion for computer science, with a particular focus on full-stack development and mastery of JavaScript.

                        I pride myself on being more than just a developer.I am a problem - solver at heart, always eager to dive into challenging situations and find efficient, creative solutions.I consider every problem as an opportunity to learn, grow, and refine my skills.

                        In the ever - evolving world of web development, continuous learning is not an option - it's a necessity. I strive to stay updated with the latest industry trends and technologies, continuously pushing my boundaries to design and develop innovative web solutions that not only meet but exceed client expectations.

                        Beyond my technical skills, I am a strong communicator and team player.I believe in the power of collaboration to create robust and sustainable solutions, and I'm always open to fresh perspectives.

                        Outside of my professional life, I find joy in appreciating life's simple pleasures and exploring the diverse landscapes that our Pacific Northwest has to offer.

                        I look forward to bringing my passion, dedication, and expertise to new opportunities and challenges.Let's build the digital future together!</p>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;