import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import { GiSoccerBall } from 'react-icons/gi'
import { FaTooth } from 'react-icons/fa6'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <header className='sticky'>
      {/* Contenedor logo del header */}
      <div className='contenedor-flex-header'>
        {/* logo */}
        <Link to='/'>
          <div>
            <h1>
              <GiSoccerBall />
              4Football
            </h1>
          </div>
        </Link>
      </div>

      {/* Contenedor de los botones */}
      <div className='contenedor-flex-header'>
        <button>Iniciar Sesion</button>
        <button>Registrarse</button>
      </div>
    </header>
  )
}
