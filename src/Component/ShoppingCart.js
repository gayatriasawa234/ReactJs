import AddItem from "./AddItem";
import CartItems from "./CartItems";
import { useState } from "react";
const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]); 
    };  

    return (
        <div>
            <h1>Shopping Cart</h1>
            <AddItem addItem={addItem} /> 
            <CartItems items={cart} />
        </div>
    );
};


export default ShoppingCart;