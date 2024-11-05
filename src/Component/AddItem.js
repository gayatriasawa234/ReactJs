const AddItem = ({ addItem }) => { 
    console.log(addItem)
    const handleAdd = () => {
        const newItem = { id: Math.random(), name: 'Item ' + Math.floor(Math.random() * 100) };
        addItem(newItem);
    }; 

    return <button onClick={handleAdd}>Add Random Item</button>;
};
export default AddItem; 