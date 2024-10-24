import React from 'react';

const Container = ({ children }) => {
    // console.log(children);
    return <div style={{ border: '1px solid black', padding: '10px' }}>{children}</div>;
};

// Usage
{/* <Container>
  <h1>Hello</h1>
  <p>This is a child element.</p>
</Container>; */}
export default Container;