import React, { useState } from 'react';
import IncrementButton from './IncrementButton';
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <IncrementButton increment={increment} count={count} /> 
        </div>
    );
};
export default Counter;  