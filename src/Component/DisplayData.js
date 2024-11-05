const DisplayData = ({ data }) => {
    return (
        <div>
            <h3>Form Data:</h3>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
        </div>
    );
};
export default DisplayData;