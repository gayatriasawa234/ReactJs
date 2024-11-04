import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [test, setTest] = useState(0);
  const [count, setCount] = useState(0);
  console.log("AuthProvider");
  // Function to log in
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to log out
  const logout = () => {
    setIsAuthenticated(false);
  };

  const updateTest = () => {
    setTest(test + 1);
  }

  const Increment = () => {
    console.log(count);
    setCount(count + 1);
  }

  const Decrement = () => {
    setCount(count - 1);
  }


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, test, updateTest, Increment, Decrement, count }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;