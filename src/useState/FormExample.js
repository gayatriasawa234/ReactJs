import React, { useState } from 'react';

const FormExample = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(Name: ${ name }, Email: ${ email });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormExample;