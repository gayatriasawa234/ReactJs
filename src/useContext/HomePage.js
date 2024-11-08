import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
const HomePage = () => {
    const { isAuthenticated, count, Increment, Decrement} = useContext(AuthContext)
    console.log(useContext(AuthContext));
    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to the Home Page</h1>
            {isAuthenticated ? (
                <p>You are logged in. Enjoy your stay!</p>
            ) : (
                <p>Please log in to access more features.</p>
            )}
            <h2>Count: {count}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
};      

export default HomePage;



// app