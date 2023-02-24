import React, {useRef}  from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import "../Styles/main.css";


function Navbar() {

    const navRef = useRef();

    const showNavBar=() => 
    {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header>
       <a href='/#'><img src='logo192.png' alt='logo' width={80} height={80}/>
        </a>
       <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>Services</a>        
            <a href='/#'>Carrers</a>
            <a href='/#'>About</a>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                <FaTimes/>
            </button>
       </nav> 
       <button className='nav-btn' onClick={showNavBar}>
           <FaBars/>
       </button>
    </header>
  )
}

export default Navbar
