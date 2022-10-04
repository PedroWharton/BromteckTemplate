import React, { useEffect } from 'react'
import { useState } from 'react'
import '../stylesheets/components/Nav.scss'
import routes from '../templateFile.js';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            handleShow(true);
          }
          else{
            handleShow(false);
          }
          return () => {
            window.removeEventListener('scroll')
          }
      })
    }, [])
    

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img
        className='nav-logo' 
        src={routes.navLogo}
        alt="Netflix Logo" />
        <img 
        src={routes.navUserLogo} 
        alt="" 
        className="nav-avatar" />
    </div>
  )
}

export default Nav