import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email);
        // console.log(Name: ${name}, Email: ${email});
        // Reset form
        // setName('');
        // setEmail('');
    };
    const enterName = (e) => {
        console.log(e)
        setName(e.target.value);
    }
    const enterEmail = (e) => {
        console.log(e);
        setEmail(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={enterName}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={enterEmail}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

// Usage
export default ContactForm;