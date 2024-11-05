import React, { useState } from 'react';

function PreferencesForm() {
  const [formData, setFormData] = useState({
    receiveNewsletter: false,
    favoriteColor: 'red'
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    console.log(event);
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted preferences:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Receive Newsletter:
        <input
          type="checkbox"
          name="receiveNewsletter"
          checked={formData.receiveNewsletter}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Favorite Color:
        <select name="favoriteColor" value={formData.favoriteColor} onChange={handleChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </label>
      <br />
      <button type="submit">Save Preferences</button>
    </form>
  );
}

export default PreferencesForm;