import React from 'react';

const Contact = () => {
    return (
        <section className="bg-gray-800 text-blue-400 p-5  font-josefin min-h-screen">
            <h1 className="text-4xl font-bold mb-10 text-center">Contact</h1>
            <div className="max-w-md mx-auto">
                <form>
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
                </form>
            </div>
        </section>
    )
}

export default Contact;