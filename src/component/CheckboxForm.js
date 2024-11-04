import React, { useState } from 'react';

function CheckboxForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    console.log(e);
    const {checked} = e.target
    setIsChecked(checked);
  };

  return (
    <form>
      <label>
        Accept Terms:
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </form>
  );
}

export default CheckboxForm;