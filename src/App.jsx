import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Menu from './components/menus/Menus';
import SecondMenu from './components/menus/SecondMenu';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Cart/CartContext';
import OrderStatus from './components/OrderStatus/OrderStatus';

function App() {
  const [heroclose, setheroclose] = useState(1);
  const [nav, setNav] = useState(false);

  const navbarchange = () => setNav(!nav);

  const heroclosebutton=()=>{
    setheroclose(2);
  }

  

  const [loading, setLoading] = useState(true);




  return (
    <CartProvider>
      <Router>
        <div>
          <div className='fixed top-0 w-full z-10'>
            <Navbar fn={setheroclose} nfn={navbarchange} nav={nav} />
          </div>

          <div className={nav ? 'blur-xs duration-1000 ease-in-out' : null}>
            {heroclose === 1 && <Hero />}
            <div className='w-full h-full '> {/* Add margin if needed */}
              <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/secondmenu" element={<SecondMenu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order-status" element={<OrderStatus />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
