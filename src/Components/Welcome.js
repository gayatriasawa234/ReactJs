import React from 'react';

const Welcome = ({ name = 'Guest' }) => {
  return <h1>Welcome, {name}!</h1>;
};

// Usage
{/* <Welcome />; // Renders: Welcome, Guest!
<Welcome name="Alice" />; // Renders: */}
export default Welcome;
