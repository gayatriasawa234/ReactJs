import React, { useState } from 'react';
import Switch from './Switch';
const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <h1>Toggle Switch: {isOn ? 'On' : 'Off'}</h1>
            <Switch toggle={toggleSwitch} />
        </div>
    );
};
export default ToggleSwitch;