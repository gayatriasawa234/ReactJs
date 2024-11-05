import React from 'react';

function Login({ onLogin }) {
    const handleLogin = () => {
        // Call the onLogin function to update the authentication state
        onLogin();
    };

    return (
        <div>
            <h1>Login</h1>
            <p>Please click the button to log in.</p>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

export default Login;  