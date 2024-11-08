import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        if (count < 20) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            {/* {/* <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> */}
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};



// Usage
{/* <Counter />; */ }
export default Counter;