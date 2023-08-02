import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasError, setHasError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
                setHasError(false);
            }, (error) => {
                console.log(error.text);
                setIsSubmitted(false);
                setHasError(true);
            });
        e.target.reset()
    }
    return (
        <section className="bg-gray-800 text-blue-400 p-5  font-josefin min-h-screen">
            <h1 className="text-4xl font-bold mb-10 text-center">Contact</h1>
            <div className="max-w-md mx-auto">
                <form onSubmit={sendEmail}>
                    <label className="block">
                        <span className="text-xl mb-2">Name:</span>
                        <input type="text" name="name" required className="w-full px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500" />
                    </label>
                    <label className="block mt-5">
                        <span className="text-xl mb-2">Email:</span>
                        <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500" />
                    </label>
                    <label className="block mt-5">
                        <span className="text-xl mb-2">Message:</span>
                        <textarea name="message" required className="w-full px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 h-32" />
                    </label>
                    <input type="submit" value="Submit" className="block mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointertransform hover:scale-110 motion-reduce:transform-none transition-transform ease-out duration-500" />
                    {isSubmitted && <div className="mt-5 text-green-500">Your message has been sent successfully!</div>}
                    {hasError && <div className="mt-5 text-red-500">Oops! There was an error sending your message.</div>}
                </form>
            </div>
        </section>
    )
}

export default Contact;
