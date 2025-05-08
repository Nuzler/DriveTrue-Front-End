import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { FiAlignJustify, FiX } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { useCart } from '../Cart/CartContext';
import user from '../../assets/user.jpg';

const Navbar = ({ fn, nfn, nav }) => {
  const navigate = useNavigate();
  const { cartnumber } = useCart();
  const [buttonChange, setButtonChange] = useState(true);
  const [cartClick, setCartClick] = useState(false);

  const toggleCartClick = () => {
    setCartClick(!cartClick);
  };

  // Navigation handlers
  const goToHome = () => {
    navigate('/');
    setButtonChange(true);
    fn(1);
  };

  const goToMenu = () => {
    navigate('/secondmenu');
    setButtonChange(true);
    fn(2);
  };

  const goToCart = () => {
    navigate('/cart');
    setButtonChange(false);
    fn(2);
  };

  const goToHomeAndCloseNav = () => {
    goToHome();
    nfn();
  };

  const goToMenuAndCloseNav = () => {
    goToMenu();
    nfn();
  };

  const goToCartAndCloseNav = () => {
    goToCart();
    nfn();
  };

  return (
    <div className='flex flex-col gap-1'>
      <div className="w-full h-[70px] flex justify-between items-center px-2 md:px-7 bg-amber-400">
        {/* Logo Section */}
        <div className='flex gap-3 items-center'>
          <img src={logo} alt='Logo' className={nav ? 'mx-[-130px] h-10 ease-in-out duration-1000' : 'h-10 rounded-full border-2'} />
          <div className='flex flex-col items-start'>
            <h1 className="text-xl sm:text-2xl font-Berkshire-Swash tracking-wide">The Traveler’s Cafe</h1>
            <p className='text-sm px-1'>Drive True</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-15 text-[14px] pr-50 font-medium text-gray-800">
          <li onClick={goToHome} className="hover:underline cursor-pointer">Home</li>
          <li onClick={goToMenu} className="hover:underline cursor-pointer">Menu</li>
          <li className="hover:underline cursor-pointer">About</li>
        </ul>

        {/* Mobile Buttons */}
        <div className='flex items-center gap-3 md:hidden'>
          <div onClick={nfn}>
            {nav ? <FiX className='ml-10 w-6 h-6' /> : <FiAlignJustify className='ml-10 w-6 h-6' />}
          </div>
          {buttonChange ? (
            <div className="relative">
              <span className="absolute top-[-8px] right-[-10px] text-xs bg-black text-white rounded-full px-2">{cartnumber}</span>
              <MdOutlineShoppingBag className="hover:text-gray-500 w-7 h-7 cursor-pointer" onClick={goToCart} />
            </div>
          ) : (
            <RiHome4Line className="hover:text-gray-500 w-7 h-7 cursor-pointer" onClick={goToHome} />
          )}
        </div>

        {/* Desktop User Icons */}
        <div className="hidden md:flex gap-6 items-center text-[14px] text-gray-800">
          <h1 className="hover:text-gray-500 cursor-pointer hidden">Search</h1>
          <h1 className="hover:text-gray-500 cursor-pointer hidden">Signup</h1>
          <div className="relative">
            <span className="absolute top-[-8px] right-[-10px] text-xs bg-black text-white rounded-full px-2">{cartnumber}</span>
            <MdOutlineShoppingBag className="hover:text-gray-500 w-9 h-9 cursor-pointer" onClick={goToCart} />
          </div>
          <div className="relative hidden">
            <span className="absolute top-[-8px] right-[-10px] text-xs bg-black text-white rounded-full px-2">0</span>
            <div className="w-8 h-8 border-2 rounded-full flex items-center justify-center">
              <img src={user} className='rounded-full' alt="user" />
            </div>
          </div>
        </div>
      </div>

      {/* Side Nav for Mobile */}
      <ul className={nav ? 'bg-gradient-to-b from-yellow-400 to-amber-500 w-[65%] h-full fixed right-0 top-0 ease-in-out duration-1000 shadow-md' : 'fixed right-[-100%] top-0 ease-in-out duration-1000'}>
        <div className='flex flex-col'>
          <FiX className='w-10 h-10' onClick={nfn} />
          <div className='flex justify-center'>
            <img src={logo} alt='Logo' className='h-20 rounded-full border-2' />
          </div>
          <div className='flex flex-col items-center my-5'>
            <h1 className="text-3xl font-Berkshire-Swash text-gray-900">The Traveler’s Cafe</h1>
            <p>Drive True</p>
          </div>
          <div className='flex justify-center'>
            <ul className='flex flex-col gap-6 pt-6 text-xl font-Playfair-Display'>
              <li onClick={goToHomeAndCloseNav} className='text-gray-800 font-medium hover:text-amber-600 cursor-pointer border-b'>Home</li>
              <li onClick={goToMenuAndCloseNav} className='text-gray-800 font-medium hover:text-amber-600 cursor-pointer border-b'>Menu</li>
              <li className='text-gray-800 font-medium hover:text-amber-600 cursor-pointer border-b'>About</li>
            </ul>
          </div>
          <div className='flex flex-col items-center my-10 text-md font-bold font-Berkshire-Swash'>
            <h1 className='text-gray-900'>Order By Phone</h1>
            <h1 className='text-3xl text-gray-900'>0362030500</h1>
            <MdOutlineShoppingBag className='w-20 h-20 my-5 hover:fill-amber-600' onClick={goToCartAndCloseNav} />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
