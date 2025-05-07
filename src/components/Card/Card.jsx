import React from 'react'
import Biriyani from '../../assets/biriyani.jpg'



const Card = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center bg-white' >
        {food.map((food)=><div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full h-[400px]  sm:w-75 md:w-64">
            <div className='relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border'>
            <img key={food.id}  src={food.img} className='h-full w-full object-cover rounded-md'/>
            </div>
            <div className='p-4'>
            <div className='mb-2 flex items-center justify-between'>
            <h1 key={food.id} className='text-slate-800 text-xl font-semibold' >{food.name}</h1>
            <h1 key={food.id} className='text-amber-400 text-xl font-semibold'>Rs.{food.price}</h1>
            </div>
            <p class="text-slate-600 leading-normal font-light">
              {food.discription}
            </p>
            <button class="rounded-md w-full mt-6 bg-amber-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             Add to Cart
            </button>
            </div>
            </div>)}
    
    
      
     
    </div>
  )
}

export default Card
