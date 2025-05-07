import React, { useState } from 'react';
import { useCart } from '../Cart/CartContext';
import { MdOutlineShoppingBag } from "react-icons/md";
import Biriyani from '../../assets/biriyani.jpg';
import Customer from '../Customer/Customer';
import Url from '../assets/assets'

const Cart = () => {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const sendData = (customerData, orderId) => {
    const data = {
      states: 1,
      orderId: orderId,
      customer: customerData,
      cartItems: cart.map(item => ({
        foodId: item.foodId,
        foodName: item.foodName,
        quantity: item.quantity,
        price: item.price
      }))
    };

    fetch(`${Url}/adding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then(data => {
      console.log("Order stored:", data);
      clearCart();
      alert("Order placed successfully!");
    })
    .catch(error => {
      console.error("Error saving order:", error);
    });
  };

  const startPayHerePayment = (customerData) => {
    const orderId = "ORDER_" + Date.now();

    window.payhere.onCompleted = function(orderIdFromPayHere) {
      console.log("Payment success!", orderIdFromPayHere);
      sendData(customerData, orderId); // Store order only after payment
    };

    window.payhere.onDismissed = function() {
      alert("Payment dismissed");
    };

    window.payhere.onError = function(error) {
      alert("Error during payment: " + error);
    };

    const payment = {
      sandbox: true, // change to false for live
      merchant_id: "YOUR_MERCHANT_ID", // Replace with yours
      return_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
      notify_url: "http://localhost:8080/payhere-notify",

      order_id: orderId,
      items: cart.map(i => i.foodName).join(", "),
      amount: totalPrice,
      currency: "LKR",
      first_name: customerData.firstName,
      last_name: customerData.lastName,
      email: customerData.email,
      phone: customerData.phone,
      address: customerData.address,
      city: customerData.city,
      country: "Sri Lanka"
    };

    window.payhere.startPayment(payment);
  };

  return (
    <div className='max-w-6xl top-16 w-full mx-auto p-4 bg-white'>
      <div className='flex items-center border-b pb-6 mb-6 justify-center'>
        <MdOutlineShoppingBag className='text-3xl mr-2' />
        <h1 className='text-3xl font-semibold text-gray-800'>My Cart</h1>
      </div>

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
        </div>
      ))}

      <div className='mt-8 bg-gray-50 p-6 rounded-lg shadow-sm'>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-700'>Shipping cost</span>
          <span className='text-gray-700'>TBD</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='text-gray-700'>Discount</span>
          <span className='text-gray-700'>Rs.0.00</span>
        </div>
        <div className='flex justify-between border-t pt-4 font-semibold text-gray-800 text-lg'>
          <span>Estimated Total</span>
          <span>Rs.{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Customer form with PayHere trigger */}
      <Customer onSubmit={startPayHerePayment} />
    </div>
  );
};

export default Cart;