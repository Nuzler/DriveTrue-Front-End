import React, { useEffect, useState  } from 'react'
import Biriyani from '../../assets/food.png'
import { useCart } from '../Cart/CartContext'
import Url from '../../assets/assets'
import { FaCirclePlus } from "react-icons/fa6";
import Icon from '../../assets/icon.png'

const Menu = () => {
  
    const category =[{id:1,name:'Fried Rice'},
        {id:2,name:'Kottu'},
        {id:3,name:'Pot'},
        {id:4,name:'Pizza'}
    ]
    const[cartshow,SetCartshow]=useState();
    const[categoryopen,SetCategoryopen]=useState();
    const [loading, setLoading] = useState(true);
    const [food, setFood] = useState([]); 
  

 useEffect(() => {
    fetch(`${Url}/getpopularfood`)
      .then(response => response.json())
      .then(data => {setFood(data)
                     setLoading(false)
      })
      .catch(error => console.error("Error fetching foods:", error));
  }, []);

  const { addToCart ,cart } = useCart();


  const [addCart,setAddcart]=useState(0);
  const [addedItems, setAddedItems] = useState({});

  const handleAdd = (foodItem) => {
   
    addToCart(foodItem);
    const existingItem = cart.find(item => item.foodId === foodItem.foodId);
    const newQty = existingItem ? existingItem.quantity + 1 : 1;
  
    // Temporarily show quantity for the added item
    setAddedItems(prev => ({ ...prev, [foodItem.foodId]: newQty }));
  
    // Hide after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const updated = { ...prev };
        delete updated[foodItem.foodId];
        return updated;
      });
    }, 2000);
    

    SetCartshow(1);
   
  };

  


 
   
   

  return (
    <div className='flex flex-col bg-amber-400    '>
      <h1 className='text-center text-8xl xl:text-9xl   font-Berkshire-Swash  my-3 text-gray-900 '>Popular Food</h1>


     {loading?  <div className="flex justify-center h-screen ">
        <div className="animate-spin   h-20 w-20 "><img src={Icon}/></div>
      </div>:
      <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 lg:mx-11 lg:gap-3 xl:grid-cols-4 xl:gap-3 xl:mx-25    '> 
      {food.map((food)=><div className="relative  flex flex-col my-6 bg-white shadow-sm   rounded-4xl  h-[450px]  hover:bg-amber-500 hover:border-3 hover:border-amber-500 ">

            <div key={food.foodId}  className='relative p-2.5 h-60 overflow-hidden rounded-xl bg-clip-border'>
            <img   src={food.imageUrl}className='h-60 w-full object-cover rounded-3xl '/>
            </div>
            <div className='p-4 '>
            <div className='mb-2 flex items-center justify-between'>
            <h1  className='text-slate-800 text-md md:text-lg lg:text-xl font-semibold hover:text-white' >{food.foodName}</h1>
            
            </div>
            <p   className="text-slate-600 leading-normal text-[12px] md:text-sm font-light">
              {food.description}
            </p>
            <h1 className='text-amber-400 text-xl pt-2  font-semibold'>Rs.{food.price}</h1>
           <button onClick={() => handleAdd(food)}    className={`rounded-md w-full mt-6 transition-all duration-300 ease-in-out 
    ${addedItems[food.foodId] ? 'bg-green-500 text-white scale-105' : 'bg-amber-400 text-white'} 
    py-2 px-4 border border-transparent text-sm shadow-md hover:shadow-lg focus:bg-cyan-700 hover:bg-cyan-700`}
  type="button">
              {addedItems[food.foodId] ? `Added x${addedItems[food.foodId]}` : 'Add to Cart'}
           </button>
            </div>
            </div>)}
      </div>}
    </div>
  )
}

export default Menu
