import React, { useEffect, useState  } from 'react'
import Biriyani from '../../assets/biriyani.jpg'
import { useCart } from '../Cart/CartContext'
import Url from '../../assets/assets'
import Icon from '../../assets/icon.png'

const SecondMenu = () => {
  
    const category =[{id:1,name:'Fried Rice',value:1},
        {id:2,name:'Kottu',value:2},
        {id:3,name:'Pot',value:3},
        {id:4,name:'Pizza',value:4}
    ]
    const[cartshow,SetCartshow]=useState();
    const[categoryopen,SetCategoryopen]=useState();
    const [loading, setLoading] = useState(true);
    const [food, setFood] = useState([]); 
    const [item,setItem]=useState([]);

 useEffect(() => {
    fetch(`${Url}/getallfood`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error("Error fetching foods:", error));
  }, []);

  

  const { addToCart } = useCart();

  const handleAdd = (foodItem) => {
    addToCart(foodItem);
    SetCartshow(1);
  };

  const categoryClick=(value)=>{

    fetch(`${Url}/getfoods/${value}`)
    .then (response=>response.json())
    .then(data=>setItem(data))
    .then(error=>console.error(error))

  }

   
   

  return (
    <div className='flex my-17'>
      <div className='bg-gradient-to-r from-red-900 to-orange-800 w-[20%] min-h-[1000px] flex flex-col      '>
        {category.map((category)=>
           <div className='flex flex-col text-md text-amber-50 font-mono font-bold cursor-pointer my-4 px-1 hover:text-xl ease-in-out duration-200'> 
          <h1 key={category.id } onClick={()=>categoryClick(category.value)}>{category.name}</h1>
          </div>)}
      </div>
       {loading?<div className="flex justify-center mx-[25%] md:mx-[50%] h-screen">
              <div className="animate-spin   h-20 w-20 "><img src={Icon}/></div>
            </div>:
      <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 '>
      {item.map((food)=><div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg  h-[400px]   ">
            <div key={food.foodId}  className='relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border'>
            <img   src={Biriyani} className='h-full w-full object-cover rounded-md'/>
            </div>
            <div className='p-4'>
            <div className='mb-2 flex items-center justify-between'>
            <h1  className='text-slate-800 text-xl font-semibold' >{food.foodName}</h1>
            <h1 className='text-amber-400 text-xl font-semibold'>Rs.{food.price}</h1>
            </div>
            <p   className="text-slate-600 leading-normal font-light">
              {food.description}
            </p>
            <button onClick={() => handleAdd(food)}   className="rounded-md w-full mt-6 bg-amber-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             Add to Cart
            </button>
            </div>
            </div>)}
      </div>}
    </div>
  )
}

export default SecondMenu
