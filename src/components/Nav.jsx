import React, { useEffect } from 'react'
import { useState } from 'react'
import '../stylesheets/components/Nav.css'

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
        src="/Logo_Azul.png" 
        alt="Netflix Logo" />
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfWu5P3XRq40XTOquHgtUR_TZ63XAu2hvQQ&usqp=CAU" 
        alt="" 
        className="nav-avatar" />
    </div>
  )
}

export default Nav