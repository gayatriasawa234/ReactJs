import React from 'react';

const List = ({ items }) => {
    console.log(items);
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Usage
{/* <List items={['Apple', 'Banana', 'Cherry']} />; */}
export default List;
