import React from 'react';
import { useSpring, animated } from 'react-spring';

const Project = ({ title, description, image, link, github }) => {
    const springProps = useSpring({
        to: { opacity: 1, scale: 1 },
        from: { opacity: 0, scale: 0.5 }, delay: 200,
        config: { tension: 120, friction: 60 } // Adjust these values as per your requirements
    });

    return (
        <div className="transform transition-transform duration-500 hover:scale-110">
            <animated.div style={{ ...springProps, transform: springProps.scale.to(scale => `scale(${scale})`) }} className="border border-gray-600 rounded-lg p-5 shadow-lg">
                <h2 className="text-2xl font-bold mb-3">{title}</h2>
                <img src={image} alt={title} className="rounded-lg mb-3" />
                <p className="mb-3">{description}</p>
                <a href={link} className="text-blue-400 hover:text-blue-500 mb-2 block">Deployed Project</a>
                <a href={github} className="text-blue-400 hover:text-blue-500">GitHub Repository</a>
            </animated.div>
        </div>
    );
}

const Portfolio = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Short description of Project 1",
            image: 'path_to_project1_image',
            link: 'link_to_project1',
            github: 'link_to_project1_github'
        },
        {
            title: "Project 1",
            description: "Short description of Project 1",
            image: 'path_to_project1_image',
            link: 'link_to_project1',
            github: 'link_to_project1_github'
        },
        {
            title: "Project 1",
            description: "Short description of Project 1",
            image: 'path_to_project1_image',
            link: 'link_to_project1',
            github: 'link_to_project1_github'
        },
        {
            title: "Project 1",
            description: "Short description of Project 1",
            image: 'path_to_project1_image',
            link: 'link_to_project1',
            github: 'link_to_project1_github'
        },
        {
            title: "Project 1",
            description: "Short description of Project 1",
            image: 'path_to_project1_image',
            link: 'link_to_project1',
            github: 'link_to_project1_github'
        },
        {
            title: "Project 1",
            description: "Short description of Project 1",
            image: 'path_to_project1_image',
            link: 'link_to_project1',
            github: 'link_to_project1_github'
        },
        // ...your other projects
    ];

    return (
        <section className="bg-gray-800 text-blue-400 p-5 font-josefin">
            <h1 className="text-4xl font-bold mb-10 text-center">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-6xl items-center justify-center">
                {projects.map(project => <Project key={project.title} {...project} />)}
            </div>
        </section>
    );
}

export default Portfolio;