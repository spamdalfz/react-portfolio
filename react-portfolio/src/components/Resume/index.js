import React from 'react';

const Resume = () => {
    const resumePath = process.env.PUBLIC_URL + '/resume/Corey_Vasser_Resume_2023.pdf';
    return (
        <div className="bg-gray-800 text-white p-5">
            <h1 className="text-4xl font-bold mb-10 text-center">Resume</h1>
            <div className="max-w-md mx-auto">
                <embed src={resumePath} type="application/pdf" width="100%" height="600px" className="mb-10" />
                <a href={resumePath} download className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">Download Resume</a>
            </div>
        </div>
    );
}

export default Resume;