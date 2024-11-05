import React, { useState } from 'react';
import DisplayData from './DisplayData';
const UserForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {

        const { name, value } = e.target;
        console.log(e)
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div>

            <h2>User Form</h2>
            <form onSubmit={handlesubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button type='submit'>submit</button>
            </form>
            <DisplayData data={formData} />
        </div>
    );
};
export default UserForm;