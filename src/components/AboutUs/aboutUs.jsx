import React from 'react'
import Cafe from '../../assets/cafe.jpg'
import Logo from '../../assets/Travelers.jpg'
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import Visa from '../../assets/Visa.png'
import { useNavigate } from 'react-router-dom';

const aboutUs = ({fn}) => {

  const navigate = useNavigate();
   const goToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' })
    fn(1);
  };

  const goToMenu = () => {
    navigate('/secondmenu');
    window.scrollTo({ top: 0, behavior: 'smooth' })
    fn(2);
  };


   const goToterms = () => {
    navigate('/terms&condition');
    window.scrollTo({ top: 0, behavior: 'smooth' })
    fn(2);
  };

   const goToAbout=()=>{
     navigate('/aboutUs');
     window.scrollTo({ top: 0, behavior: 'smooth' })
     fn(2);
   }


  return (
    <div>

       {/* Header Section */}
      <div className='flex justify-center mt-40  '>
      <h1 className='font-Berkshire-Swash  text-4xl xl:text-7xl text-gray-700 '  style={{ textShadow: '20px -20px 2px rgba(55, 52, 91, 0.1)' }} >The Traveler's Cafe</h1>
      </div> 
      <img src={Cafe} className='pt-20 '></img> 

       {/* Discription Section */}
      <div className=' flex flex-col justify-center items-center  pt-15'>
      <img src={Logo} className='w-[20%] h-[50%] lg:w-[10%] lg:h-[50%]'></img>
      <h1 className='font-Berkshire-Swash xl:text-5xl lg:text-4xl md:text-4xl text-2xl text-gray-700 pt-10' >The Traveler's Cafe</h1>
      <p className='xl:mx-100 lg:mx-75 md:mx-50 sm:mx-25 text-center pt-10 text-gray-500 '>Eat well when you travel often. The Local authentic food at The Traveler's Café will walk you through an amazing joumey of gastronomic food. Travelers' café serves many varieties of rice dishes, amazing desserts, cakes, snacks and tea, Sri Lankans all-time favorite string hoppers, hoppers and kottu dishes.</p>
      </div>

       {/* Map Section */}
      
        <div className="w-full h-[400px] my-6">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5881264980867!2d80.13325837499718!3d6.939727518186556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ab0440dc3003%3A0x61da2ebe1625f468!2sTravelers%20Cafe!5e0!3m2!1sen!2slk!4v1748425713796!5m2!1sen!2slk" 
             className="w-full h-full"
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade">
              </iframe>
         </div>
      <div className='bg-black pb-20'>
        <div className='xl:flex xl:gap-20 xl:justify-between xl:pr-20 xl:pl-20    text-gray-300  p-5 pt-15 '>

          {/* Footer */}
          <div>
          <h1 className='text-xl text-white relative inline-block after:content-[] after:block after:w-1/2 after:h-[5px] after:bg-amber-400 after:mt-1 '>Information</h1>
          <ul className='pt-2'>
            <li onClick={goToHome} className='cursor-pointer'>Home</li>
            <li onClick={goToMenu}>Menu</li>
            <li onClick={goToAbout}>About Us</li>
            <li onClick={goToterms}>Terms & Condition</li>
          </ul>
          </div>


           <div>
          <h1 className='text-xl text-white relative inline-block after:content-[] after:block after:w-1/2 after:h-[5px] after:bg-amber-400 after:mt-1  pt-10 xl:pt-0'>Get In Touch</h1>
          <ul className='pt-2'>
            <li className='flex items-center gap-2'><FaClock /> <h1> Mon - Sun : 7.00Am to 10.00Pm </h1></li>
            <li className='flex items-center gap-2'><IoCall/><a href="tel:0362251515" >0362251515</a></li>
            <li className='flex items-center gap-2'><IoLogoWhatsapp /><a href="tel:0761001906" >0702900393</a> </li>
            <li className='flex items-center gap-2'><FaLocationPin /><h1>HighLevel Road,Kosgama.</h1></li>
          </ul>
          </div>


          <div>
          <h1 className='text-xl text-white relative inline-block  after:content-[] after:block after:w-1/2 after:h-[5px] after:bg-amber-400 after:mt-1 pt-10 xl:pt-0'>We Accept</h1>
          <img src={Visa} className='w-80 pt-3'/>
          </div>

        </div>
     </div>
       
       
    </div>
  )
}

export default aboutUs
