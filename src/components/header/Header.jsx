import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import { GiSoccerBall } from 'react-icons/gi'
import BurguerButton from './BurgerButton'

export default function Header() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <HeaderWrapper>
      {/* Contenedor logo del header */}

      {/* logo */}
      <div className='contenedor-logo'>
        <Link to='/'>
          <h1>
            <GiSoccerBall />
            4Football
          </h1>
        </Link>
      </div>

      {/* Contenedor de los botones */}
      <div className={`nav-container ${clicked ? 'active' : ''}`}>
        <Link to='#'>Iniciar Sesion </Link>
        <Link to='#'>Crear Usuario </Link>
      </div>

      <div className='burger'>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
    </HeaderWrapper>
  )
}
const HeaderWrapper = styled.header`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  width: 100%;
  height: 5rem;

  position: sticky;
  margin-top: 0;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;

  h1 {
    color: white;
  }

  .nav-container a {
    color: white;
    padding: 0.5rem;
    text-decoration: none;
    border: 0.1rem solid white;
    border-radius: 5rem;
    margin-right: 1rem;
  }

  .nav-container {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: black;
      font-size: 1.5rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        display: inline;
        color: white;
        font-size: 1rem;
      }
    }
  }

  .nav-container.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 317%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: white;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid white;
    }
  }
  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .contenedor-logo {
    margin-left: 2rem;
  }
`
const BgDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`
