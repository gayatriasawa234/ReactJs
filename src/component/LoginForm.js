import React, { useState } from 'react';

function LoginForm() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Handle changes to input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);
  };




  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Submitted data:', formData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;