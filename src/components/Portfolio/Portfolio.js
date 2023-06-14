import React from 'react';
//import './Portfolio.css';

const Portfolio = () => {
    return (
        <section>
            <h1>Portfolio</h1>
            <div>
                {/* replace with actual projects */}
                <div>
                    <h2>Project 1</h2>
                    <img src='path_to_project1_image' alt='project1' />
                    <p>Short description of Project 1</p>
                    <a href='link_to_project1'>Deployed Project</a>
                    <a href='link_to_project1_github'>GitHub Repository</a>
                </div>
                <div>
                    <h2>Project 2</h2>
                    <img src='path_to_project2_image' alt='project2' />
                    <p>Short description of Project 2</p>
                    <a href='link_to_project2'>Deployed Project</a>
                    <a href='link_to_project2_github'>GitHub Repository</a>
                </div>
                {/* continue this pattern for all projects */}
            </div>
        </section>
    )
}

export default Portfolio;