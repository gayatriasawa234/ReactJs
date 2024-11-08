import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserPosts = () => {
    const [userId, setUserId] = useState(1);
    const [posts, setPosts] = useState([]);
    const [Loading, setLoading] = useState(true);


    const getData = async (userId) => {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        console.log(response.data);
        setPosts(response.data)
        setLoading(false);
    }


    useEffect(() => {
        console.log(userId);
        getData(userId);
    }, [userId]); // Effect re-runs whenever userId changes

    return (
        <div>
            <h1>Posts by User {userId}</h1>
            <button onClick={() => setUserId(userId + 1)}>Next User</button>
            {Loading ? <p>Loading</p> : <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>}
        </div>
    );
};

export default UserPosts;