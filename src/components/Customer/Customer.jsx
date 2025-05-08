import React, { useEffect, useState } from 'react'
import Url from '../../assets/assets'
import Icon from '../../assets/icon.png'

const Customer = ({onSubmit,Load,setLoad}) => {

   const[form,setForm]=useState({
    fname:"",
    lname:"",
    vehicle:"",
    number:"",
    email:"",
    pickupTime:""
   });

   const [pickupOption,setPickupOption]=useState("now")

  useEffect(()=>{

    if(pickupOption==="now"){
     const now = new Date;
     now.setMinutes(now.getMinutes() + 45);

     const offset = now.getTimezoneOffset();
     now.setMinutes(now.getMinutes() - offset);

     setForm(prev=>({...prev,pickupTime: now.toISOString().slice(0, 16) }))
    }else{
      setForm(prev=>({...prev,pickupTime: '' }))
    }

  },[pickupOption]);



   const handleSubmit=(e)=>{
    setLoad(false);
    e.preventDefault();
    const SearchEnyFieldEmpty=Object.values(form).some(value=>value===null ||value==='');
    if(SearchEnyFieldEmpty){
      alert('Fill The Empty Field');
      return;
    }
    else{
     onSubmit(form);}
   }

   const handleChange=(e)=>{
        const{name,value}=e.target;
        setForm(prev=>({...prev,[name]:value}));   
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
      <div className='flex flex-col  pt-7'>
       
        <h2 className='flex text-xl font-semibold text-gray-800 justify-center'>Customer Details </h2>
        
        <div className='flex flex-col '>
        <h2>First Name</h2>
        <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-yellow-400 w-full'>
        <input type="text" name="fname" value={form.fname} onChange={handleChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="" required />
        </div>
        </div>

        <div className='flex flex-col '>
        <h2>Last Name</h2>
        <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-yellow-400 w-full'>
        <input type="text" name="lname" value={form.lname} onChange={handleChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder=""/>
        </div>
        </div>

        <div className='flex flex-col '>
        <h2>Vehicle Number</h2>
        <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-yellow-400 w-full'>
        <input type="text" name="vehicle" value={form.vehicle} onChange={handleChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder=""/>
        </div>
        </div>

        <div className='flex flex-col '>
        <h2>Phone Number</h2>
        <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-yellow-400 w-full'>
        <input type="text" name="number" value={form.number} onChange={handleChange}  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder=""/>
        </div>
        </div>

        <div className='flex flex-col '>
        <h2>Email</h2>
        <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-yellow-400 w-full'>
        <input type="text" name="email" value={form.email} onChange={handleChange}  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder=""/>
        </div>
        </div>
       
        </div>

        <div className='flex flex-col gap-3'>
        <h1>Pickup Time</h1>
         
        <div class="flex items-center mb-4">
            <input id="pickup-option-1" type="radio" name="pickup" value="now" checked={pickupOption === "now"} onChange={() => setPickupOption("now")} class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="pickup-option-1" aria-describedby="pickup-option-1" />
            <label for="pickup-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Now (in 45 minutes)
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="pickup-option-2" type="radio" name="pickup" value="later" checked={pickupOption === "later"} onChange={() => setPickupOption("later")} class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="pickup-option-2" aria-describedby="pickup-option-2"/>
            <label for="pickup-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Later
            </label>
        </div>
        
        {pickupOption === "later" && (
        <input
          type="datetime-local"
          name="pickupTime"
          value={form.pickupTime}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      )}
      
        </div>
 
        {!Load?  <div className="flex justify-center h-screen">
                <div className="animate-spin   h-20 w-20 "><img src={Icon}/></div>
              </div>:
        <button type="submit" className='mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition-all'>
          Checkout
        </button>}
        </form>
    </div>
  )
}

export default Customer
