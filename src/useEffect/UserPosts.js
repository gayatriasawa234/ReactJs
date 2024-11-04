import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserPosts = () => {
    const [userId, setUserId] = useState(1);
    const [posts, setPosts] = useState([]);



    const getData = async (userId) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        console.log(response.data);
        setPosts(response.data)
    }


    useEffect(() => {
        console.log(userId);
        getData(userId);
    }, [userId]); // Effect re-runs whenever userId changes

    return (
        <div>
            <h1>Posts by User {userId}</h1>
            <button onClick={() => setUserId(userId + 1)}>Next User</button>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;