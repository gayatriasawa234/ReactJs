// import Button from "./button"
import React from "react";
import ChildComponent1 from "./ChildComponent1";
const ChildComponent = ({Increment,label,count}) => {
    return (
        <div>
            <ChildComponent1 Increment={Increment} label={label} Count={count} />
            {/* <h1>Count: {count}</h1> */}
            {/* <button onClick={Increment}>{label}</button> */}
        </div>
    )
}

export default ChildComponent;