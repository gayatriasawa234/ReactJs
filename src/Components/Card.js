import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

// Usage
{/* <Card title="My Card" content="This is the content of the card." />; */}
export default Card;