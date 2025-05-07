import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Card from './components/Card/Card'
import Menu from './components/menus/Menus'
import SecondMenu from './components/menus/SecondMenu'
import Cart from './components/Cart/Cart'
import { CartProvider } from './components/Cart/CartContext';
import OrderStatus from './components/OrderStatus/OrderStatus';

function App() {
  const [count, setCount] = useState(0)
  const [view, setView] = useState('menu');
  const[heroclose,setheroclose]=useState(1);
  const [nav,Setnav]=useState(false);
  
  const navbarchange=()=>{
    Setnav(!nav)
  }
  const renderComponents=()=>{
    switch(view){
      case 'menu': return <Menu/>;
      case 'cart':return <Cart/>;
      case 'secondmenu':return <SecondMenu/>;
    }
  }
  const herocloseButton=(x)=>{
    setheroclose(x);
  }

  return (
    <CartProvider>
    <Router>
      <div >
        <div className='fixed top-0 w-full z-10'>
          <Navbar view={setView} fn={setheroclose} nfn={navbarchange} nav={nav} />
        </div>
        <div className={nav?'blur-xs duration-1000 ease-in-out':null}>
        {heroclose === 1 && <Hero  />}
        <div className='w-full h-full'>
          <Routes>
            <Route path="/" element={renderComponents()}  />
            <Route path="/order-status" element={<OrderStatus />} />
          </Routes>
        </div>
        </div>
      </div>
    </Router>
  </CartProvider>
   
  )
}

export default App
