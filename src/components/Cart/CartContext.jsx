import { createContext, useState, useContext } from "react";
import Url from '../../assets/assets'


//  Create a new context
const CartContext = createContext();

//  Create a provider component that wraps your app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const[cartnumber,setCartnumber]=useState(0);

  //  Add item to cart (same logic we built before)
  const addToCart = async (foodItem) => {

    try{

      const response= await fetch(`${Url}/getfood/${foodItem.foodId}`)
      if(!response.ok){
          throw new Error("Failed to fetch item from backend");
      }
      const backendFood = await response.json();

      if(backendFood.price!==foodItem.price){
        throw new Error("Price Is Incorect, Refresh The Page To See New Price ")
      }
    
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
    setCartnumber(prev => prev + 1);
    }catch(error){
      console.error("Error ading To Cart",error);
      alert("Something went wrong while verifying the item.");
    }
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