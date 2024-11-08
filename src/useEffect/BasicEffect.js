import React, { useState, useEffect } from 'react';

const BasicEffect = () => {
  const [count, setCount] = useState(0);
  // const [text, setText] = useState();
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [Add, setAdd] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(num1) + parseFloat(num2);
    setAdd(result);
  }
  useEffect(() => {
    console.log('Component rendered or updated');
  },[]);

  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={num1}
            onChange={(e) => setnum1(e.target.value)}
          ></input>
          <br />
          <input type="text"
            value={num2}
            onChange={(e) => setnum2(e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
          <h3>Add: {Add}</h3>
        </form>
      </div>
    </div>
  );
};

export default BasicEffect;

// By default, useEffect runs after every render, both when the component is mounted and when it updates.