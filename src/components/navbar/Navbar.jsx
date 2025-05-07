import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Menu from '../menus/Menus';
import Cart from '../Cart/Cart';
import { useCart } from '../Cart/CartContext'
import { MdOutlineShoppingBag } from "react-icons/md";
import user from '../../assets/user.jpg'
import { RiHome4Line } from "react-icons/ri";
import Url from '../../assets/assets'


const navbar = ({view,fn,nfn,nav}) => {

  
  const { cartnumber } = useCart();
  const [buttonChange,SetbuttonChange]=useState(true);


  const item =[
      {id:1,name:'HOME',link:'menu'},
      {id:2,name:'MENU',link:'menu'},
      {id:3,name:'ABOUT US',link:'menu'},
    
  ]

  const [cartClick,setcartClick]=useState(false);

  const cartButtonClick=()=>{
      setcartClick(!cartClick);

  }

  const Menubuttonclick=()=>{
    view('secondmenu');
    
    fn(2);
   
  }

  const Homebuttonclick=()=>{
    view('menu');
    SetbuttonChange(true);
    fn(1);
    
  }

  const CartButtonClick=()=>{
    view('cart');
    SetbuttonChange(false);
    fn(2);
  }

  const NaviMenubuttonclick=()=>{
    view('secondmenu');
    SetbuttonChange(true);
    fn(2);
    nfn();
    
  } 
  const NaviHomebuttonclick=()=>{
    view('menu');
    SetbuttonChange(true);
    fn(1);
    nfn();
  }
  const NaviCartButtonClick=()=>{
    view('cart');
    SetbuttonChange(true);
    fn(1);
    nfn();
  }
  const CartNaviButtonClick=()=>{
    view('cart');
    SetbuttonChange(false);
    fn(2);
    nfn();
  }
  

  return (
    <div className='  flex  flex-col gap-1  '>

     
     <div className="w-[100%] h-[70px] xl:px- lg:px-15 flex justify-between items-center px-7   bg-amber-400   ">
     
  {/* Left Section - Logo */}
  <div className='flex gap-3 md:gap-2 items-center '>
  <img src={logo} alt='' className={nav?' mx-[-130px] h-10 ease-in-out duration-1000 ':'h-10 rounded-full border-2'}/>
  <div className='flex flex-col items-start'>
  <h1 className="text-2xl  font-Berkshire-Swash  tracking-wide md:text-sm">The Traveler’s Cafe</h1>
  <p className='text-sm px-1 '>Drive True</p>
  </div>
  </div>


  {/* Center Section - Navigation Links */}
  <ul className="hidden md:flex xl:mx-[25%] lg:mx-[25%] md:mx-[10%] gap-15 text-[14px] font-medium text-gray-800">
   
      <li onClick={Homebuttonclick} className="hover:underline underline-offset-4 cursor-pointer">Home</li>
      <li onClick={Menubuttonclick} className="hover:underline underline-offset-4 cursor-pointer">Menu</li>
      <li  className="hover:underline underline-offset-4 cursor-pointer">About</li>
      
 
  </ul>
  <div className='flex  items-center  '>
  <div onClick={nfn} className=' md:hidden '>
      {nav?<FiX className='flex ml-[300%] sm:ml-[600%]   w-6 h-6'/> :  < FiAlignJustify className='flex  w-6 h-6 ml-[300%] sm:ml-[600%] '/> }
     
      </div>
      {buttonChange?<div className="relative">
      <span className="absolute top-[-8px] right-[-10px] text-xs bg-black text-white rounded-full md:hidden px-2">{cartnumber}</span>
      <MdOutlineShoppingBag className="hover:text-gray-500 w-7 h-7 cursor-pointer md:hidden" onClick={CartButtonClick}/>
    </div>:<RiHome4Line className="hover:text-gray-500 w-7 h-7 cursor-pointer md:hidden" onClick={Homebuttonclick} />}
      </div>
       {/*/ navbar  details */}
      <div>
      <ul className={nav? 'bg-gradient-to-b from-yellow-400 to-amber-500  w-[65%] h-full fixed right-0 top-0 backdrop-blur-xs  ease-in-out duration-1000 shadow-md    ': ' fixed ease-in-out duration-1000 right-[-100%] top-0  '} >
      <div className='flex flex-col  item-center'>
        
        <FiX className='flex   w-10 h-10' onClick={nfn}/>
        {/*/ logo and name */}
        <div className='flex justify-center '>
        <img src={logo} alt='' className='h-20 rounded-full border-2 '/>
        </div>
        <div className='flex flex-col items-center my-5 '>
        <h1 className="text-3xl  font-Berkshire-Swash text-gray-900  tracking-wide md:text-sm">The Traveler’s Cafe</h1>
        <p className=''>Drive True</p>
        
        </div>
        
        {/*/ home menu about */}
        <div className='flex justify-center '>
        <ul className=' flex flex-col gap-6  pt-6 text-xl font-Playfair-Display '>
          <li onClick={NaviHomebuttonclick} className='mr-6   text-gray-800 text-md font-medium hover:text-amber-600 cursor-pointer border-b'>Home</li>
          <li onClick={NaviMenubuttonclick} className='mr-6  text-gray-800 text-md font-medium hover:text-amber-600 cursor-pointer border-b'>Menu</li>
          <li  className='mr-6  text-gray-800 text-md font-medium hover:text-amber-600 cursor-pointer border-b'>About</li>
        </ul>
        </div>
        {/*/ phone number */}
        <div className='flex flex-col  items-center my-15 justify-center text-md font-bold font-Berkshire-Swash'>
        <h1 className='text-gray-900'>Order By Phone</h1>
        <h1 className='text-3xl text-gray-900  font-Berkshire-Swash'>0362030500</h1>
        <MdOutlineShoppingBag className=' w-20 h-20 my-15 hover:fill-amber-600'onClick={CartNaviButtonClick}/>
        </div>
        
        </div>
      </ul>
     

      </div>

  {/* Right Section - User Options */}
  <div className="md:flex gap-6 items-center text-[14px] text-gray-800 hidden">
    <h1 className="hover:text-gray-500 cursor-pointer hidden">Search</h1>
    <h1 className="hover:text-gray-500 cursor-pointer hidden">Signup</h1>
    
    
    <div className="relative">
      <span className="absolute top-[-8px] right-[-10px] text-xs bg-black text-white rounded-full px-2">{cartnumber}</span>
      <MdOutlineShoppingBag className="hover:text-gray-500 w-9 h-9 cursor-pointer" onClick={CartButtonClick}/>
    </div>
    <div className="relative hidden">
      <span className="absolute top-[-8px] right-[-10px] text-xs bg-black text-white rounded-full px-2">0</span>
      <div className="w-8 h-8 border-2 rounded-full flex items-center justify-center"><img src={user} className='rounded-full'/></div>
    </div>
  </div>
  
</div>

{cartClick?<Cart/>:null}
      
     

    </div>
  )
}

export default navbar
