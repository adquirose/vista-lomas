import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu8, ERemove } from '../../Icons'
import { useCurrentWidth } from '../../hooks'
import Logo from '../../assets/logo.png'
import './styles.css'

const NavMobile = () => {
  const [isVisible, setIsVisible] = useState(false)
  const handleOnClick = () => {
    setIsVisible(!isVisible)
  }
  return(
    <Fragment>
      <img src={Logo} style={{width:'120px'}} alt="logo-vista"/>
      {!isVisible ? 
        <button 
          style={{position:'absolute', top:'15px', right:'15px', cursor:'pointer', height:'50px', background:'rgba(53,53,53,1)'}} 
          onClick={handleOnClick}
        >
          <Menu8 width={42} height={42} color="white"/>
        </button> :
        <div 
          style={{
            width:'100%', 
            height:'100vh',
            backgroundColor:'rgba(0,0,0,0.90)',
            position:'absolute',
            top:'0', 
            right:'0',
            zIndex:11
          }}>
          <button 
            style={{position:'absolute', top:'15px', right:'15px', cursor:'pointer',background:'transparent', height:'50px'}} 
            onClick={handleOnClick}
          >
            <ERemove width={42} height={42} color="white"/>
          </button>
          <Nav display="d-block" onClick={handleOnClick}/>
        </div>
      }
    </Fragment>
  )
}
const Nav = ({display, onClick}) => {
  return(
    <nav>
      <ul>
        <Link to="/" onClick={onClick} className={`${display} li`}>Proyecto</Link>
        <Link to="/ayd" onClick={onClick} className={`${display} li`}>Arquitectura y Diseño</Link>
        <Link to="/contacto" onClick={onClick} className={`${display} li`}>Contacto</Link>  
      </ul>
    </nav>
  )
}
function Navbar() {
  let width = useCurrentWidth()
  
  const mostrarNav = () => {
    if(width < 768){
      return(
        <NavMobile/>
      )
    }else{
      return(
        <div className='navbar-container'>
          <img src={Logo} style={{width:'120px'}} alt="logo-extracto-color"/>
          <Nav display="d-inline"/>
        </div>)
    }
  }
  return (
    <Fragment>
      { mostrarNav()}
    </Fragment>

  )
}

export default Navbar