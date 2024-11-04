import React, { useState, useEffect } from 'react';

const BasicEffect = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState();
  const add = () => {

  }
  useEffect(() => {
    console.log('Component rendered or updated');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>
        <input type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <br />
        <input type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <h3>Add: {add}</h3>



      </div>

    </div>
  );
};

export default BasicEffect;

// By default, useEffect runs after every render, both when the component is mounted and when it updates.