import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    console.log(items);
    console.log(newItem);
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;