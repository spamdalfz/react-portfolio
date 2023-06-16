import React from 'react';

const Contact = () => {
    return (
        <section>
            <h1>Contact</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </section>
    )
}

export default Contact;
