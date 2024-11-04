import React, { useState } from 'react';

const UserProfile = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = () => {
        console.log({ name, age, isAdmin });
    };
    const Age = (e) =>{
        setAge(parseInt(e.target.value))
        console.log(e);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={Age}
            />
            <label>
                <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={() => setIsAdmin(!isAdmin)}
                />
                Admin
            </label>
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default UserProfile;