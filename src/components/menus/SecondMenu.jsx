import React, { useEffect, useState  } from 'react'
import Biriyani from '../../assets/biriyani.jpg'
import { useCart } from '../Cart/CartContext'
import Url from '../../assets/assets'
import Icon from '../../assets/icon.png'

const SecondMenu = () => {
  
    const category =[{id:1,name:'Fried Rice',value:1},
        {id:2,name:'Kottu',value:2},
        {id:3,name:'Pot',value:3},
        {id:4,name:'Bites',value:13},
        {id:5,name:'Noodles',value:4}
    ]
    const[cartshow,SetCartshow]=useState();
    const[categoryopen,SetCategoryopen]=useState();
    const [loading, setLoading] = useState(true);
    const [food, setFood] = useState([]); 
    const [item,setItem]=useState([]);

 useEffect(() => {
    fetch(`${Url}/getallfood`)
      .then(response => response.json())
      .then(data => {setItem(data)

                     setLoading(false)
      })

      .catch(error => console.error("Error fetching foods:", error));
  }, []);

  

  const { addToCart,cart } = useCart();
  const [addedItems, setAddedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  const handleAdd = (foodItem) => {
    addToCart(foodItem);
    const existingItem = cart.find(item => item.foodId === foodItem.foodId);
    const newQty = existingItem ? existingItem.quantity + 1 : 1;
     
    //Temperly Show Cart Item Quantity
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

  const categoryClick=(value)=>{
    setActiveCategory(value);
    fetch(`${Url}/getfoods/${value}`)
    .then (response=>response.json())
    .then(data=>setItem(data))
    .then(error=>console.error(error))

  }

   
   

  return (

    <div className='flex flex-col my-17'>
      <div className='bg-gradient-to-r from-red-900 to-orange-800 w-full min-h-[10px] flex justify-center gap-3 fixed top-17 z-10    '>

        {category.map((category)=>
           <div className={`flex text-sm font-mono font-bold cursor-pointer my-4 px-1 hover:text-xl ease-in-out duration-200 `}> 
          <h1 key={category.id } onClick={()=>categoryClick(category.value)}>{category.name}</h1>
          </div>)}
      </div>

      {loading?<div className="flex justify-center mx-[25%] md:mx-[50%] h-screen">
              <div className="animate-spin   h-20 w-20 "><img src={Icon}/></div>
            </div>:
      <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-8'>
      {item.map((food)=><div className="relative flex flex-col my-4 bg-white shadow-sm border border-slate-200 rounded-2xl  h-[400px]   ">
            <div key={food.foodId}  className='relative p- h-full  overflow-hidden rounded-xl bg-clip-border'>
            <img   src={food.imageUrl} className='h-full w-full object-cover object-cover rounded-md r'/>

   
            </div>
            <div className='p-3'>
            <div className='mb-2 flex items-center justify-center '>
            <h1  className='text-slate-800 text-md md:text-xl font-semibold align-middle' >{food.foodName}</h1>
            
            </div>
            <p   className="text-slate-600 leading-normal text-[12px] font-light line-clamp-2 resize align-middle md:text-sm">
              {food.description}
            </p>
            <h1 className='text-amber-400 text-xl pt-2 font-semibold'>Rs.{food.price}</h1>
            <button onClick={() => handleAdd(food)}   className="rounded-md w-full mt-6 bg-amber-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             {addedItems[food.foodId] ? `Added x${addedItems[food.foodId]}` : 'Add to Cart'}
            </button>
            </div>
            </div>)}
      </div>}
    </div>
  )
}

export default SecondMenu
