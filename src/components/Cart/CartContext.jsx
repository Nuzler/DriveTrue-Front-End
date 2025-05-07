import { createContext, useState, useContext } from "react";


//  Create a new context
const CartContext = createContext();

//  Create a provider component that wraps your app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const[cartnumber,setCartnumber]=useState(0);

  //  Add item to cart (same logic we built before)
  const addToCart = (foodItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.foodId === foodItem.foodId);
      if (existingItem) {
        console.log("Existing Item Added",existingItem)
        return prevCart.map(item =>
          item.foodId === foodItem.foodId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        console.log("new item added",foodItem)
        return [...prevCart, { ...foodItem, quantity: 1 }];
      } 
    });
    setCartnumber(cartnumber+1);
    
  };

  const deleteToCart = (food) => {
    if(food.quantity===1){
    const updatedItems = cart.filter(item => item.foodId !== food.foodId);
    setCart(updatedItems);
    setCartnumber(cartnumber - 1); //  tracking quantity
    }
    else{
      setCart(prevCart => {
       
          return prevCart.map(item =>
            item.foodId === food.foodId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
      
      });
      setCartnumber(cartnumber - 1);
    }
  };
 
  

  //  This value will be shared with all components
  const value = { cart, setCart, addToCart, cartnumber,deleteToCart };

  //  Wrap children (App) with this context
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


//  Custom hook for using the cart in any component
export const useCart = () => useContext(CartContext);