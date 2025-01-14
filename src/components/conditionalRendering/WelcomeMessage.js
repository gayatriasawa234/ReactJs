import React from 'react';

const WelcomeMessage = ({isLoggedIn}) => {
    console.log(isLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
};
export default WelcomeMessage;
