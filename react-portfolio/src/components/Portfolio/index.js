import React from 'react';
import { useSpring, animated } from 'react-spring';
import employeetracker from '../../../src/images/employeetracker.JPG';
import notetaker from '../../../src/images/note-taker.JPG';
import weatherdashboard from '../../../src/images/weather-dashboard.JPG';
import ecommerce from '../../../src/images/ecommerce.JPG';
import readme from '../../../src/images/readme.gif';
import dailyplanner from '../../../src/images/daily-planner.JPG';

const projects = [
    {
        title: "Employee Tracker",
        description: "CLI tool for managing an employee database with operations on departments, roles, and employees.",
        image: employeetracker,
        link: '',
        github: 'https://github.com/spamdalfz/employee-tracker'
    },
    {
        title: "Note Taker",
        description: "An application using Express.js to write, save, and retrieve notes from a JSON file.",
        image: notetaker,
        link: 'https://note-taker-spamdalf.herokuapp.com/',
        github: 'https://github.com/spamdalfz/note-taker'
    },
    {
        title: "Weather Dashboard",
        description: "Weather Dashboard displaying current and future conditions for searched cities with saved search history.",
        image: weatherdashboard,
        link: 'https://spamdalfz.github.io/weather-dashboard/',
        github: 'https://github.com/spamdalfz/weather-dashboard'
    },
    {
        title: "E-Commerce Back-end",
        description: "Backend for e-commerce site enabling CRUD operations and tag/category views via Express.js, Sequelize and MySQL.",
        image: ecommerce,
        link: '',
        github: 'https://github.com/spamdalfz/e-commerce-back-end'
    },
    {
        title: "README.md Generator",
        description: "Application to generate a professional README by answering questions in the command line using Node.js.",
        image: readme,
        link: '',
        github: 'https://github.com/spamdalfz/readme-generator'
    },
    {
        title: "Daily Planner",
        description: "Daily planner that will save user inputs and display color coded time blocks for past, present, and future.",
        image: dailyplanner,
        link: 'https://spamdalfz.github.io/daily-planner/',
        github: 'https://github.com/spamdalfz/daily-planner'
    },
    // ...other projects
];

const Project = ({ title, description, image, link, github }) => {
    const springProps = useSpring({
        to: { opacity: 1, scale: 1 },
        from: { opacity: 0, scale: 0.5 }, delay: 200,
        config: { tension: 120, friction: 50 } // Adjust these values as per your requirements
    });

    return (
        <div className="transform transition-transform duration-500 hover:scale-110">
            <animated.div style={{ ...springProps, transform: springProps.scale.to(scale => `scale(${scale})`) }} className="border border-gray-600 rounded-lg p-5 shadow-lg">
                <h2 className="text-2xl font-bold mb-3">{title}</h2>
                <div className="h-64 w-full overflow-hidden relative mb-3"> {/* adjust the height and width as per your need */}
                    <img src={image} alt={title} className="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
                </div>
                <p className="mb-3">{description}</p>
                {link
                    ? <a href={link} className="text-blue-400 underline hover:text-blue-600 mb-2 block">Deployed Project</a>
                    : <span className="text-blue-400 mb-2 block opacity-0">Deployed Project</span>
                }
                <a href={github} className="text-blue-400 underline hover:text-blue-600">GitHub Repository</a>
            </animated.div>
        </div>
    );
}
const Portfolio = () => {
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