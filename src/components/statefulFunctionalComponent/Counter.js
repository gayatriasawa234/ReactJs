import { useState } from "react";
import React from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {

        if (count < 10) {
            setCount(count + 1);
        }

    }
    const Decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={() => setCount(count * 2)}>multiply</button>
            <button onClick={() => setCount(count / 2)}>Divide</button>
        </div>
    );
};

// Usage
export default Counter;
