import React from 'react';

const Greeting = ({ name }) => {
    console.log(name);
    // console.log()
    return <h1>Hello, {name}!</h1>;
};

export default Greeting;

