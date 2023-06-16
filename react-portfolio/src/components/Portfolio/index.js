import React from 'react';

const Portfolio = () => {
    return (
        <section className="bg-gray-800 text-white p-5">
            <h1 className="text-4xl font-bold mb-10 text-center">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-6xl items-center justify-center">
                {/* replace with actual projects */}
                <div className="border border-gray-600 rounded-lg p-5 shadow-lg transform transition-transform duration-500 hover:scale-110">
                    <h2 className="text-2xl font-bold mb-3">Project 1</h2>
                    <img src='path_to_project1_image' alt='project1' className="rounded-lg mb-3" />
                    <p className="mb-3">Short description of Project 1</p>
                    <a href='link_to_project1' className="text-blue-400 hover:text-blue-500 mb-2 block">Deployed Project</a>
                    <a href='link_to_project1_github' className="text-blue-400 hover:text-blue-500">GitHub Repository</a>
                </div>
                <div className="border border-gray-600 rounded-lg p-5 shadow-lg transform transition-transform duration-500 hover:scale-110">
                    <h2 className="text-2xl font-bold mb-3">Project 2</h2>
                    <img src='path_to_project2_image' alt='project2' className="rounded-lg mb-3" />
                    <p className="mb-3">Short description of Project 2</p>
                    <a href='link_to_project2' className="text-blue-400 hover:text-blue-500 mb-2 block">Deployed Project</a>
                    <a href='link_to_project2_github' className="text-blue-400 hover:text-blue-500">GitHub Repository</a>
                </div>
                <div className="border border-gray-600 rounded-lg p-5 shadow-lg transform transition-transform duration-500 hover:scale-110">
                    <h2 className="text-2xl font-bold mb-3">Project 2</h2>
                    <img src='path_to_project2_image' alt='project2' className="rounded-lg mb-3" />
                    <p className="mb-3">Short description of Project 2</p>
                    <a href='link_to_project2' className="text-blue-400 hover:text-blue-500 mb-2 block">Deployed Project</a>
                    <a href='link_to_project2_github' className="text-blue-400 hover:text-blue-500">GitHub Repository</a>
                </div>
                <div className="border border-gray-600 rounded-lg p-5 shadow-lg transform transition-transform duration-500 hover:scale-110">
                    <h2 className="text-2xl font-bold mb-3">Project 2</h2>
                    <img src='path_to_project2_image' alt='project2' className="rounded-lg mb-3" />
                    <p className="mb-3">Short description of Project 2</p>
                    <a href='link_to_project2' className="text-blue-400 hover:text-blue-500 mb-2 block">Deployed Project</a>
                    <a href='link_to_project2_github' className="text-blue-400 hover:text-blue-500">GitHub Repository</a>
                </div>
                <div className="border border-gray-600 rounded-lg p-5 shadow-lg transform transition-transform duration-500 hover:scale-110">
                    <h2 className="text-2xl font-bold mb-3">Project 2</h2>
                    <img src='path_to_project2_image' alt='project2' className="rounded-lg mb-3" />
                    <p className="mb-3">Short description of Project 2</p>
                    <a href='link_to_project2' className="text-blue-400 hover:text-blue-500 mb-2 block">Deployed Project</a>
                    <a href='link_to_project2_github' className="text-blue-400 hover:text-blue-500">GitHub Repository</a>
                </div>
                <div className="border border-gray-600 rounded-lg p-5 shadow-lg transform transition-transform duration-500 hover:scale-110">
                    <h2 className="text-2xl font-bold mb-3">Project 2</h2>
                    <img src='path_to_project2_image' alt='project2' className="rounded-lg mb-3" />
                    <p className="mb-3">Short description of Project 2</p>
                    <a href='link_to_project2' className="text-blue-400 hover:text-blue-500 mb-2 block">Deployed Project</a>
                    <a href='link_to_project2_github' className="text-blue-400 hover:text-blue-500">GitHub Repository</a>
                </div>
                {/* continue this pattern for all projects */}
            </div>
        </section>
    )
}

export default Portfolio;
