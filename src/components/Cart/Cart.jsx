import React, { useEffect, useState } from 'react';
import { useCart } from '../Cart/CartContext';
import { MdOutlineShoppingBag } from "react-icons/md";
import Biriyani from '../../assets/biriyani.jpg';
import { Form } from 'react-router-dom';
import Customer from '../Customer/Customer';
import Url from '../../assets/assets'

const Cart = () => {
  const { cart, deleteToCart} = useCart();
  const[orderId,setOrderId]=useState();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const[hash,setHash]=useState();
  const[pickuptime,setPickuptime]=useState('Now');
  const [loading, setLoading] = useState(true);


   const sendData=async (customerData)=>{
         const data={
          states:1,
          totalPrice:totalPrice,
         customer:customerData,
         cartItems:cart.map(item=>({
          foodId:item.foodId,
          foodName:item.foodName,
          quantity:item.quantity,    
          price:item.price,
          
          
        })),
      
         
         }
         console.log(data);


         try {
          const response = await fetch(`${Url}/adding`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          
        
          const result = await response.json();
    
          if (!response.ok) {
            throw new Error(result.message || "Order save failed");
          }
         
             
          console.log(result);
          setOrderId(result.orderId);
          redirectToPayHere(result.orderId, customerData, totalPrice,result.hash,result.uuid);
          
         
        } catch (error) {
          console.error("Error placing order:", error);
          alert("Failed to place order.");
        }

         }

         const redirectToPayHere = (orderId, customer, amount,hash,uuid) => {
          const payment = {
            "sandbox": true,
            "merchant_id": "1230226",
            "return_url": `https://drive-true-front-end.vercel.app/order-status?states=success&uuid=${uuid}`,
            "cancel_url": "https://drive-true-front-end.vercel.app?status=cancel",
            "notify_url": "https://drivetrue-production.up.railway.app/payhere-notify",
            "order_id":String(orderId),
            "items": "Food Order",
            "amount":String(amount.toFixed(2)),
            "currency": "LKR",
            "first_name": customer.fname,
            "last_name": customer.lname,
            "email": customer.email,
            "phone": String(customer.number),
            "hash":String(hash),
            "address": "No.1, Galle Road",
            "city": "Colombo",
            "country": "Sri Lanka",
            "delivery_address": "No. 46, Galle road, Kalutara South",
            "delivery_city": "Kalutara",
            "delivery_country": "Sri Lanka",
            "custom_1": String(uuid),
            "custom_2": ""
            
          };
         
          console.log("Sending Payment:", payment);
           debugger;
        
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = 'https://sandbox.payhere.lk/pay/checkout';
      
          for (const key in payment) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = payment[key];
            form.appendChild(input);
          }
      
          document.body.appendChild(form);
          form.submit();
        };


         

        

         

  return (
    <div className='max-w-6xl my-17  w-full mx-auto p-4  bg-white'>
      {/* Header */}
      <div className='flex items-center border-b pb-6 mb-6 justify-center '>
        <MdOutlineShoppingBag className='text-3xl mr-2' />
        <h1 className='text-3xl font-semibold text-gray-800 '>My Cart</h1>
      </div>

      {/* Cart Items */}
      {cart.map(item => (
        <div key={item.foodId} className='flex items-start justify-between border-b py-4'>
          <div className='flex gap-4'>
            <img src={Biriyani} alt={item.foodName} className='w-28 h-28 object-cover rounded-lg' />
            <div className='flex flex-col justify-between'>
              <h2 className='text-lg font-semibold text-gray-800'>{item.foodName}</h2>
              <p className='text-sm text-gray-500'>Each: Rs.{item.price.toFixed(2)}</p>
              <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
            </div>
            
          </div>
          <div className='text-right'>
            <p className='text-lg font-semibold text-amber-500'>
              Rs.{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
          <h1 className='cursor-pointer hover:text-amber-500' onClick={()=>deleteToCart(item)}>close</h1>
        </div>
      ))}

      {/* Summary Section */}
      <div className='mt-8 bg-gray-50 p-6 rounded-lg shadow-sm'>
        
        <div className='flex justify-between mb-2'>
          <span className='text-gray-700'>Discount</span>
          <span className='text-gray-700'>Rs.0.00</span>
        </div>
        <div className='flex justify-between border-t pt-4 font-semibold text-gray-800 text-lg'>
          <span>Estimated Total</span>
          <span>Rs.{totalPrice.toFixed(2)}</span>
        </div>
      </div>

         
       {cart.length>0 && (<Customer onSubmit={sendData} Load={loading} setLoad={setLoading}/>) }
      
      
    
    </div>
  );
};

export default Cart;
