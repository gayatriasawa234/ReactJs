import React from 'react';

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

// Usage
export default Button;