import React from "react";
const ChildComponent1 = ({Increment,label,Count}) => {
    console.log(Count);
    return (
        <>
            <h1>Count: {Count}</h1>
            <button onClick={Increment}>{label}</button>
        </>
    )
}
export default ChildComponent1;