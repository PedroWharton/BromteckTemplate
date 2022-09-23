import React, { useEffect } from 'react'
import { useState } from 'react'
import '../stylesheets/components/Nav.css'

function LoginNav() {

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
        src="/Logo_Azul.png" 
        alt="Netflix Logo" />
    </div>
  )
}

export default LoginNav