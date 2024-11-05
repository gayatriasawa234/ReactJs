const IncrementButton = ({ increment, count }) => {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
};
export default IncrementButton;