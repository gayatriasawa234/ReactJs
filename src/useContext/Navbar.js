import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {


  // const [isAuthenticated, setIsAuthenticated] = (false);
  const { isAuthenticated, login, logout, test, updateTest, Decrement} = useContext(AuthContext);
  // console.log(useContext(AuthContext));
  // console.log(test);


  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
      <h2>My App</h2>
      <h1>Test:{test}</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <button onClick={updateTest}>IncrementTest</button>
      <button onClick={Decrement}>Decrement</button>
    </nav>
  );
};

export default Navbar;