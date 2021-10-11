import React, {Fragment, useState}from 'react';
import logo from '../assets/img/logo.png'
import '../css/header.css'
import { DataMenu } from './DataMenu';
//react icons 4.3 is broken try later
// import  {VscThreeBars} from 'react-icons/vsc'

const Header=()=>{
  const [activeBurger,setActiveBurger]=useState(false)
  const showing=(e)=>{
    setActiveBurger(true)
  }
  return(
    <Fragment>
        <header className="header">
          <picture className='header__logoContainer'>
            <a href="#header-anchor"><img className='logo'src={logo} alt="Logo Riverside" /></a>
          </picture>
          <div className='header__banner'>
            <h2 className="header__banner--title  blue">
              Unwind and relax in a peaceful village retreat
            </h2>
            <p className='header__banner--subtitle subtitle white'>
              Static Caravan and Touring Holidays near Southend-on-Sea, Essex
            </p>
          </div>
          <nav className="navbar">
          <svg onClick={()=>{setActiveBurger(!activeBurger)}} xmlns="http://www.w3.org/2000/svg" className='burger-icon' height="48px" viewBox="0 0 24 24" width="48px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          
            <ul className='navbar__list'>
              {DataMenu.map((item,index)=>
              <li
                key={index}
                className=' navbar__list--item white'>
                  <a   className=' text-decoration-none  fs-3 navbar__list--link'href={item.address}> {item.name} </a>
              </li>)}
            
            </ul>
          </nav>
          
        </header>
        {activeBurger ?
        <ul className='navbar__list--vertical'>
              {DataMenu.map((item,index)=>
              <li
                onClick={()=>{setActiveBurger(!activeBurger)}}
                key={index}
                className=' navbar__list--item white'>
                  <a style={{color:'white'}}className='text-decoration-none  fs-3 navbar__list--link'href={item.address}> {item.name}</a>
              </li>)}
              
            </ul>
            :
            <span></span>}
    </Fragment>
)
}

export default Header