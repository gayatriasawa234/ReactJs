import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UserDetail = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const result = response.data
        setUser(result);
        setLoading(false);
    }
    useEffect(() => {
        console.log(userId);
        if (!userId) return; // Exit if no userId is provided  

        fetchUser();  //
    }, [userId]); // Dependency on userId, re-fetches on userId change 

    if (loading) return <p>Loading...</p>;
    return (

        <div>
            <h2>{user?.name}</h2>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default UserDetail;