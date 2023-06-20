import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Resume = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const resumePath = process.env.PUBLIC_URL + '/resume/Corey_Vasser_Resume_2023.pdf';
    const frontEndSkills = [
        'HTML5',
        'CSS3',
        'JavaScript ES6+',
        'jQuery',
        'Bootstrap',
        'Tailwind CSS'
    ];
    const backEndSkills = [
        'Node.js',
        'Express',
        'SQL',
        'MySQL',
        'MongoDB',
        'NoSQL',
        'Git',
        'GitHub'
    ];

    return (
        <div className="bg-gray-800 text-white p-5 font-josefin">
            <h1 className="text-4xl font-bold mb-10 text-center text-blue-400 transform hover:scale-110 motion-reduce:transform-none transition-transform ease-out duration-500">Resume</h1>
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold my-5 text-center">Front-End Proficiencies</h2>
                <ul className="mb-5">
                    {frontEndSkills.map((skill, index) => <li key={index} className="my-3">{skill}</li>)}
                </ul>
                <h2 className="text-2xl font-bold my-5 text-center">Back-End Proficiencies</h2>
                <ul className="mb-5">
                    {backEndSkills.map((skill, index) => <li key={index} className="my-3">{skill}</li>)}
                </ul>
                <div className="flex justify-center mt-10 space-x-4">
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer transform hover:scale-110 motion-reduce:transform-none transition-transform ease-out duration-500"
                    >
                        Preview Resume
                    </button>
                    <a
                        href={resumePath}
                        download
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer transform hover:scale-110 motion-reduce:transform-none transition-transform ease-out duration-500"
                    >
                        Download Resume
                    </a>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Resume Preview"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        },
                        content: {
                            color: 'lightsteelblue',
                            width: '80%',
                            height: '80%',
                            margin: 'auto'
                        }
                    }}
                >
                    <button onClick={() => setModalIsOpen(false)}>Close Preview</button>
                    <embed src={resumePath} type="application/pdf" width="100%" height="80%" />
                </Modal>
            </div>
        </div>
    );
}

export default Resume;
