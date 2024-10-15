import React from 'react'
import Perfil from '../img/logoPerfil.jpeg'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { useState } from 'react'

const Header = () => {
  
  const isDesktopOrLaptop = useMediaQuery ({
    query: '(min-width: 600px)'
  })
  
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Perfil} alt="perfil" />
        </div>
        {!isDesktopOrLaptop &&
          <div className="button">
            <button onClick={ () => setIsOpen(!isOpen)} className={`${isOpen ? 'open' : 'close'}`}>
              <div className="div1"></div>
              <div className="div2"></div>
              <div className="div3"></div>
            </button>
          </div>
        }
        {isDesktopOrLaptop &&
          <div className="links">
            <Link onClick={ () => setIsOpen(!isOpen)} to=''>Home</Link>
            <a onClick={ () => setIsOpen(!isOpen)} href='#timeline'>Timeline</a>
            <a onClick={ () => setIsOpen(!isOpen)} href='#publications'>Publicaciones</a>
            <a onClick={ () => setIsOpen(!isOpen)} href='#contact'>Contacto</a>
          </div>
        }
      </div>
      {!isDesktopOrLaptop &&
        <div className="links">
          <div className={`sider ${isDesktopOrLaptop ? '' : `${isOpen ? 'open' : 'close'}`}`}>
            <Link onClick={ () => setIsOpen(!isOpen)} to=''>Home</Link>
            <a onClick={ () => setIsOpen(!isOpen)} href='#timeline'>Timeline</a>
            <a onClick={ () => setIsOpen(!isOpen)} href='#publications'>Publicaciones</a>
            <a onClick={ () => setIsOpen(!isOpen)} href='#contact'>Contacto</a>
          </div>
        </div>
      }
    </div>
  )
}

export default Header

