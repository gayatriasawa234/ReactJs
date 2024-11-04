import React, { useState, useEffect } from 'react';

const CounterWithPreviousState = () => {
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(null);

    const increment = () => {
        setPrevCount(count);        // Store current count as previous before updating
        setCount(count + 1);
    };

    const decrement = () => {
        setPrevCount(count);      // Store current count as previous before updating
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Current Count: {count}</h1>
            <h2>Previous Count: {prevCount !== null ? prevCount : "N/A"}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterWithPreviousState;