import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Biriyani from '../../assets/biriyani.jpg';
import Url from '../../assets/assets'

const OrderStatus = () => {
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('states');

  const [data, setData] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const orderId = query.get('order_id');

    if (!orderId) {
      console.log("No orderId found in URL");
      return;
    }

    const parsedId = parseInt(orderId);
    console.log("useEffect triggered with orderId:", parsedId);

    fetch(`${Url}/GetOrderById/${parsedId}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error("Fetch error:", error));
  }, [location.search]); 

    
 console.log(data);
  
 const message = data?.states === 2 ? 'Ongoing'
 : data?.states === 3 ? 'Cooking'
 : data?.states === 4 ? 'Order Ready'
 : 'bye';

  return (
   <div>
    { data?.states<5&data?.states>1?
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">
        {status === 'success' ? 'Payment complete!' : 'Payment Cancelled'}
      </h1>
      <p className="mt-4 text-gray-600">
        {status === 'success'
          ? `Thank you for your order ${data?.customer?.fname || ''}. `
          : 'Your payment was cancelled. You can try again anytime.'}
      </p>
      <div>
        {status === 'success'
          ? <div>
            <div><h1 className="mt-4 text-gray-600">Order ID :{data?.orderId}</h1></div>
            <div><h1 className='text-xl font-bold text-gray-900' >Status : {message}</h1></div>
            {data?.cartItems.map(item=>(
                  <div key={item.foodId} className='flex items-start justify-between border-b py-4'>
                    <div className='flex gap-4'>
                      <img src={item.imageUrl} alt={item.foodName} className='w-28 h-28 object-cover rounded-lg' />
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
                ))}</div>
          : 'Your payment was cancelled. You can try again anytime.'}
      </div>
    </div>:null }</div>
  );
};

export default OrderStatus;
