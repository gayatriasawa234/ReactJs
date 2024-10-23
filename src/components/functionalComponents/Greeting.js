import React from 'react';
function Greeting(props) {
    console.log(props);
    return (
        <div>
            <h1>Hello, {props.name}!</h1>;
            <h1>{props.number}</h1>
        </div>

    )


}

export default Greeting;


// Functional components are JavaScript functions that return JSX.
// They are simple, stateless, and ideal for components that primarily handle UI.
