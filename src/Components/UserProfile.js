import React from 'react';

const UserProfile = (props) => {
    const {name, age} = props;
    console.log(name);
    console.log(age);
    console.log(props);
  return (
    
    <div>
       
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

// Usage
export default UserProfile;
{/* <UserProfile name="Bob" age={25} />; */}