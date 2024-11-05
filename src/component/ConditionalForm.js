import React, { useState } from 'react';

function ConditionalForm() {
    const [formData, setFormData] = useState({
        subscribe: false,
        email: ''
    });

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Subscribe to Newsletter:
                <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                />
            </label>
            <br />
            {formData.subscribe && (
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
}

export default ConditionalForm;