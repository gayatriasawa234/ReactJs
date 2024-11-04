import { useState } from "react";
const Counter1 = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount((prevCount) => {
       console.log('Prev Count:', prevCount);
         prevCount = prevCount + 1
       console.log('Next Count:', prevCount)
         return prevCount;
       });
    //   setCount((prevCount) => prevCount + 1);
      // setCount(count+1)
    };
  
    const decrement = () => {
      setCount((prevCount) => {
        console.log('Prev Count:', prevCount);
        prevCount = prevCount - 1
        console.log('Next Count:', prevCount)
        return prevCount;
      });
    //   setCount((prevCount) => prevCount - 1);
    };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
  export default Counter1;